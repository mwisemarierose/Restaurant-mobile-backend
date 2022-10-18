import Foods from "../models/cartModel.js";
import validateFoodData from '../helpers/validation.js'
import fs from 'fs'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: "rose31",
    api_key: "271952541959535",
    api_secret: "rFomfeogdIEKEXsJRX6n3DOcBD0",
    
  });

export const AddFood = (req, res)  => {
    let newPost = {};
    newPost["name"] = req.body.title;
    newPost["category"] = req.body.category;
    newPost["cost"] = req.body.cost;
    newPost["desc"] = req.body.desc;

    let response = validateFoodData(req.body);
  
    if (response.error) {
      let errors = [];
      response.error.details.map((err) => errors.push(err.message));
      res.status(422).json({ msg: "Invalid parameters", errors });
      return;
    }
  
    if (req.file) {
      const path = req.file.path;
      validateFoodData({ thumb: path, ...req.body });
  
      cloudinary.uploader.upload(
        path,
        ( image,err) => {
          if (err) return res.send(err);
          
          fs.unlinkSync(path);
          if (image) {
            newPost["thumb"] = image.url;
            const food = new Foods(newPost);
            food.save();
            res.status(201).json({ msg: "Food added successfully" });
          }
        },
        { folder: "Restaurant/" }
      );
    } else {
      newPost["thumb"] = null;
      const food = new Foods(newPost);
      food.save().then((data) => {
        res.status(201).json({ msg: "Food added successfully", data });
      });
    }
  };
