import mongoose from 'mongoose'

// function for connect to the database.
const connectDB = async (DATABASE_URL) => {

    try {

        const DB_OPTIONS = {
            dbName : process.env.DBNAME
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log(`Connected to db successfully...`)
        
    } catch (err) {
        console.log(err)
    }
}

export default connectDB