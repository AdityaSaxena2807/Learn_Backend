/**
 * this is the old way to import dotenv
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
  //*path is used to specify the location of the .env file
});
**/
import "dotenv/config";
import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
  .then(() => {
    //here app.on is used to listen for any errors that occur in the app and log them to the console
    app.on("error", (error) => {
      console.error("ERROR: ", error);
    });
    //here app.listen is used to start the server and listen on the specified port. If the PORT environment variable is not set, it will default to 8000.
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
/** 
//?ASYNC AWAIT METHOD 
import express from "express";

const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR: ", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
//*this type of function is called IIFE in javascript as it executes immediately after its definition
**/
