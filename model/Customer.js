import mongoose from 'mongoose'

// creating the schema for customer....
const customerSchema = mongoose.Schema({
    firstName : {type : String, uppercase : true, required : true, trim : true},
    lastName : {type : String, uppercase : true, trim : true},
    gender : {type : String, trim : true, required : true},
    email : {type : String, required : true, trim : true, unique : true},
    mobile : {type : Number, required : true, unique : true},
    password : {type : String, required : true, minLength : 6},
    address : {
            adress1 : {type : String, required : true, trim : true},
            adress2 : {type : String, trim : true, default : ""},
            pincode : {type : String, required : true, trim : true, minLength : 6},
            state : {type : String, required : true, trim : true},
            country : {type : String, required : true, trim : true}
    },
    join : {type : Date, default : Date.now}
})

// creating a model.
const customerModel = mongoose.model('customer', customerSchema)

export default customerModel