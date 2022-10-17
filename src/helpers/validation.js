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
   foodName :joi.object().required().foodName(),
   address : joi.object().required().address(),
})
return schema.validate(order);
}
export default {registerValidation ,OrderValidation}