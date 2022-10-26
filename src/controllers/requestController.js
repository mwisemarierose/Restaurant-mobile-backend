



import User from "../models/userModel.js";
import compare from "../helpers/authentication.js";
import mailer from '../helpers/transport.js';
import Request from '../models/requestModel.js';



export const createrequest=async(req,res)=>{
    try{
        const request = await Request.create({
          Name:req.body.Name,
          Email:req.body.Email, 
          phoneNumber:req.body.phoneNumber,
          Address:req.body.Address, 
          Description:req.body.Description,
          Status:req.body.Status,
          
        })
        
        await mailer({email:request.Email} ,"createrequest").catch((error)=>{
          console.log(error)
        })
        return res.status(200).json({message:"request sent successfully",request})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({error:error.messageS})
    }
}
// const getrequest = async (req,res)=>{
//     try{ 
//         const id=  req.params._id
//         const request = await Request.findById(id)
//         // const user = await User.findAll()
//         res.status(200).json({message:"request",request})
//     }catch(error){
//       console.log(error);
//     }
//   }
//   const getAllrequest = async(req,res)=>{
//     try{
//        const request =await Request.find()
//        res.status(200).json(request)
//     }catch(err){
//        console.log(err);
//     }
//   }
 
//   const confirmRequest = async( req ,res )=>{
//     try {
//       const {id} = req.params._id
//       const user = await Request.find(id).select("Firstname Email Option")
//       const password = generatePassword()
//       const salt = await bcrypt.genSalt(10)
//       const hashpsw = await bcrypt.hash(password,salt)
     
//       if(user){
//         const newUser = await User.create({
//           username: user[0].Firstname,
//           password:hashpsw,
//           email:user[0].Email,
//           role:user[0].Option
//         })
//         await mailer({email:newUser.email,password:password,username:newUser.username},"confirm")
//         await newUser.save()
//         // await user.remove()
//       }
//       return res.status(200).json({message:"request confirmed"})
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   const deleterequest=async(req,res)=>{
      
//     try{
//         const id= req.params._id
//         const request=await Request.findByIdAndDelete(id)
//         res.status(200).json({message:"request deleted ",request})
//     }catch(error){
//        console.log(error)
//     }
//     }

