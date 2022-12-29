import User from "../models/userModel.js";
import compare from "../helpers/authentication.js";
import AppError from "../util/AppError.js";


export const signup = async (req, res, next) => {
  try{ 
  const { username, email,phone, password } = req.body;
  const hashpassword = compare.hashpassword(password);
     
     const user = await User.create({
      username: username,
        email: email,
        phone:phone,
        password: hashpassword,
   })

  return res.status(200).json({message:"user created successfully",user})

}catch(error){
   console.log(error);
   return res.status(400).json({error:error.message})
}
}
 
  
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    
    if (!user) {
      throw new Error("User not found");
    }
    await compare.comparePassword(password,user.password)
    return res.status(200).json({
      message: "you are logged in successfully",
      status: 200,
      token: compare.generateToken(user),
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    await User.find({})
    .then((users) => {
      return res.status(200).json({
        data: users,
        message: "Retrieved",
      });
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateProfile = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  User.findByIdAndUpdate(
    id,
    {
      username: username,
      email: email,
    },
    (err, result) => {
      if (result) {
        res.status(201).json({
          message: "user updated",
        });
      }
    }
  );
};
export const deleteUser = async (req, res) => {
  try {
    const id = req.params
    const user = await User.findByIdAndDelete(id);
    console.log(user)
    res.status(200).json({ message: "User deleted successfully ",data: user, });
  } catch (error) {
    console.log(error);
  }
};
