import customerModel from "../model/Customer.js"
import bcrypt from 'bcrypt'

export default class customerController{

    // handle post request related to '/api' 
    static createCustomer = async (req, res) => {

        try{
            // hashinng password using bcrypt.
            req.body.password = await bcrypt.hash(req.body.password, 10)

            const customer = await customerModel(req.body)
            
            const newCustomer = await customer.save()
            
            res.json(newCustomer)
        }   
        catch(err) {
            res.json({"error" : err.message})
        }           

    }


    // handle get request related to '/api' 
    static getAllCustomer = async (req, res) => {

        try{  
            const allCustomers = await customerModel.find()
            res.json(allCustomers)
        }
        catch(err){
            console.log(err.message)
        }
    }


    // handle post request related to '/api/:id' 
    static getCustomerById = async (req, res) => {
        try{
            const customer = await customerModel.findById(req.params.id)
            res.json(customer)
        }
        catch(err){
            res.json({err : err.message})
        }

    }


    // handle put request related to '/api/:id' 
    static updateCustomerById = async (req, res) => {
        try{
            const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument : "after"})
            res.json(customer)
        }
        catch(err){
            res.json({err : err.message})
        }
    }


    // handle delete request related to '/api/:id' 
    static deleteCustomerById = async (req, res) => {
        try{
            const customer = await customerModel.findByIdAndDelete(req.params.id)
            res.json(customer)
        }
        catch(err){
            res.json({err : err.message})
        }
    }
}