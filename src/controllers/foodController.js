import Foods from "../models/foodModel.js";
import cloudinary from "../helpers/cloudinary.js";


export const createItem = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path,{
      folder: 'Restaurant',
      use_filename: true
  },);
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
export const getAllproduct = async (req, res) => {
  try {
    const product = await Foods.find().sort({createdAt: -1 })
    res.status(200).send(product)
  } catch (err) {
    console.log(err);
  }
}
export const getProduct = async (req, res) => {

  try {
    const id = req.params._id
    const product = await Foods.findById(id)

    res.status(200).json(product)
  } catch (error) {
    console.log(error);
  }
}
export const deleteproduct = async (req, res) => {

  try {
    const id = req.params._id
    const product = await Foods.findByIdAndDelete(id)
    res.status(200).json({ message: "product deleted ", product })
  } catch (error) {
    console.log(error)
  }
}