import mongoose from "mongoose";



// Providing connection string for connecting to my local mongodb server using mongoose

const connectDB = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/', {
        dbName:'todo',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => {
          console.log('Connected to MongoDB');
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
        });
   
}

export { connectDB };
