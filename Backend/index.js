import express from "express";
import { connectDB } from "./db.js";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";

const app = express();
const PORT = 3000;

// Database Stuff here

connectDB();

const todoSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const todoModel = mongoose.model("todoData", todoSchema);

// All Middlewares

// Middleware to parse JSON bodies
app.use(cors());
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// APIs Stuff

app.get("/", (req, res) => {
  res.send("<h1>Server Connection Established</h1>");
});


app.get('/todo/database' , async(req , res) => {

    const data = await todoModel.find({}).exec();
     
    res.json(data);

    
})





// Adding the TODO
app.post("/todo/add", async (req, res) => {
  const { subject, message, date } = req.body;

  const todo = await todoModel.create({
    subject: subject,
    message: message,
  });

  if (todo) {
    res.sendStatus(200);
    console.log(todo);
  } else {
    res.sendStatus(404);
  }
});


// DELETING the TODO
app.delete("/todo/delete/:id", (req, res) => {
  const { id } = req.params;

  todoModel
    .findByIdAndDelete(id)
    .then((deletedTodo) => {
      if (!deletedTodo) {
        return res.status(404).json({ error: "Todo not found" });
      }
    //   console.log(id);
      res.json({ message: "Todo deleted successfully" });
      // res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
      res.status(500).json({ error: "Error deleting todo" });
    });
});


 


// Listening to the Port
app.listen(PORT, (req, res) => {
  console.log(`Server Running fine at ${PORT}`);
});
