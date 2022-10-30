import dotenv from 'dotenv'
import compare from "../helpers/authentication.js";
dotenv.config()


export const adminLogin = (req,res) =>{

    try {
        const { email ,password } = req.body
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASS)
        return res.status(400).json("bad request!")
        const token  = compare.generateToken ({email ,role :'admin'})
        return res.status(200).json({message:'YOU ARE LOGGED SUCCESSFULLY',token})
    } catch (error) {
        
    }
}