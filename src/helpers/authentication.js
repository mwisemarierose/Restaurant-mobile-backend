import bcrypt from "bcryptjs";
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

    function generatePassword  ()  {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '1234567890' + '!@#$%^&()_+~`|}{[]:;?><,./-=';
    for (var i = 1; i <= 16; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    return pass;
  
}

export default {generateToken,hashpassword,comparePassword,generatePassword}

