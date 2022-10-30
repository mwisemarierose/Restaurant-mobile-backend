import jwt from 'jsonwebtoken';
import Users from '../models/userModel.js'


 export const verifyLogin = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const verify = jwt.verify(token, 'api');

        if(verify){
            req.user = verify;
            next();
        } else {
            res.status(401).json({
              status: 401,
              message: 'Please log in to make an action'
            });
        }
    } catch(err) {
        res.status(401).json({
            status: 401,
            message: 'Please log in to make an action'
        });
    }
}

export const adminAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'api');
    console.log(decoded.id.role);
    if (!decoded) return res.status(400).json({ message: "Invalid Authentication." });
    // const user = await Users.findOne({ _id: decoded._id });
    // console.log(user);
    if (decoded.id.role !== "admin") {
      return res.status(400).json({ message: "You are not authorized" });
    }
    next();
  };

