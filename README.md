customer rest api project

Package use 
     
    "bcrypt": "^5.0.1",
    "dotenv": "^11.0.0",
    "express": "^5.0.0-alpha.8",
    "mongoose": "^6.1.6"
    "nodemon": "^2.0.15"

How to use 

    1. import directory first
    2. move to the imported directory
    3. npm install 
    4. npm run dev or npm run start

Different routes

    /api

        - get request 
            gives response as json about all customers stored.
        
        - post request 

            takes a json data as a body

                Eg :
                    {
                        "firstname" : "rahul",
                        "lastname" : "gandhi",
                        "gender" : "male",
                        "email" : "rahulgandhi@gmail.com",
                        "mobile" : 3892018238,
                        "password" : "rahul345",
                        "address" : {
                            "adress1" : "lal chowk, delhi",
                            "pincode" : 123445
                            "state" : "uttar pradesh",
                            "country" : "bihar"
                        },
                    }
    
    /api/:id

        get request 

            give response as an json of a customer having id passed in the url.
        
        put request

            update the customer of id passed in the url
        
        delete request

            delete the customer of id passed in the url.
