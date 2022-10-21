import Foods from "../models/foodModel.js";
import cloudinary from "../helpers/cloudinary.js";


export const createItem = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newItem = new Foods({
      name: req.body.name,
      category: req.body.category,
      cost: req.body.cost,
      desc: req.body.desc,
      thumb: result.secure_url,
    });
    const item = await newItem.save()
    return res.status(200).json({message:"Food added successfully",item})
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
