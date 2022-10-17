import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {} from "dotenv/config";

     function generateToken  (id)  {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
    }
    

   function hashpassword(password){
        return bcrypt.hashSync(password,10)
    }

    function comparePassword(password, hashedPassword){
        return bcrypt.compareSync(password, hashedPassword)
    }

export default {generateToken,hashpassword,comparePassword}