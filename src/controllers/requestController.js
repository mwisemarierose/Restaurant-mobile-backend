import User from "../models/userModel.js";
import compare from "../helpers/authentication.js";
import mailer from "../helpers/transport.js";
import Request from "../models/requestModel.js";
import bcrypt from "bcryptjs";
import AppError from "../util/AppError.js";


export const createrequest = async (req, res) => {
  try {
    const request = await Request.create({
      Name: req.body.Name,
      Email: req.body.Email,
      phoneNumber: req.body.phoneNumber,
      Address: req.body.Address,
      Description: req.body.Description,
      Status: req.body.Status,
    });

    await mailer({ email: request.Email }, "createrequest")
    .catch((error) => {
      console.log(error);
    });
    return res
      .status(200)
      .json({ message: "request sent successfully", request });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};
export const getrequest = async (req, res) => {
  try {
    const id = req.params._id;
    const request = await Request.findById(id);
    res.status(200).json({ message: "request", request });
  } catch (error) {
    console.log(error);
  }
};
export const getAllrequest = async (req, res) => {
  try {
    const request = await Request.find();
    res.status(200).json(request);
  } catch (err) {
    console.log(err);
  }
};
export const updateRequest = async (req,res) =>{
  try {
      const updatedRequest = await Request.findByIdAndUpdate(
      req.params._id,
      {
          $set: req.body,
      },
      { new:true}
      )
      return res.status(200).json({message:"Request updated successfully", updatedRequest})
  } catch (error) {
      return res.status(500).json({error:error.message})
  }
}

export const confirmRequest = async (req, res,next) => {
  try {
    const id = req.params;
    // if (Request.Status !== 'pending') {
    //   return next(
    //     new AppError('Request is already approved or rejected', 400),
    //   );
    // }
    const user = await Request.find(id).select("Name Email role");
    const password = compare.generatePassword();
    const salt = await bcrypt.genSalt(10);
    const hashpsw = await bcrypt.hash(password, salt);

    if (user) {
      const newUser = await User.create({
        username: user[0].Name,
        password: hashpsw,
        email: user[0].Email,
        role: "manager",
      });
      await mailer(
        {
          email: newUser.email,
          password: password,
          username: newUser.username,
        },
        "confirm"
      );
      await newUser.save();
    }
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params._id,
      {
         Status :"approved"
      },
      { new:true}
      )
    return res.status(200).json({ message: "request confirmed",updatedRequest });
  } catch (error) {
    console.log(error);
  }
};

export const approvedRequest = async (req,res) =>{
    
    
  }


export const deleterequest = async (req, res) => {
  try {
    const id = req.params._id;
    const request = await Request.findByIdAndDelete(id);
    res.status(200).json({ message: "request deleted ", request });
  } catch (error) {
    console.log(error);
  }
};
