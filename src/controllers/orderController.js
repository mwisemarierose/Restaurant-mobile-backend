import Orders from '../models/orderModel.js'
import Users from '../models/userModel.js'
import orderValidation from '../helpers/validation.js'



  export const makeOrder = async (req, res) => {
    try {
      const { name, email, foodName, address } = req.body;
      const errorMessage = orderValidation(
        name,
        email,
        foodName,
        address
      );
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const user = await Users.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ message: "wrong email address.Please retry" });
      await new Orders({ name, email, foodName, address }).save();
      res.status(201).json({
        message: "You have successfully placed order",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
