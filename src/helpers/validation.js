import joi from "joi"

const registerValidation=(user) => {
    const schema =joi.object().keys({
        email: joi.string().required().email(),
        names: joi.string().required(),
        password: joi.string().required().min(6)
        
    })
    return schema.validate(user);
}
const OrderValidation = (order) => {
const schema  =joi.object().keys({
   username  : joi.object().required().username(),
   email : joi.object().required().email(),
   quantity:joi.object().required().foodName(),
   address : joi.object().required().address(),
})
return schema.validate(order);
}

const  validateFoodData =(data) => {
    const joiSchema = joi.object({
      name: joi.string().min(5).required(),
      category: joi.string().min(5).required(),
      cost: joi.string().min(5).required(),
      desc: joi.string().min(5).required(),
      thumb: joi.string().optional(),
      
    })
    return joiSchema.validate(data);
  }
export default {registerValidation ,OrderValidation ,validateFoodData}