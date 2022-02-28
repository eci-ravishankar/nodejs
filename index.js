let express = require("express");
let app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const homeRoute = require("./routes/home");
const PORT = process.env.PORT;

dotenv.config({ path: '.env' });
// const URI = "mongodb+srv://ravi_sahu:Sahu45a@cluster0.4upeo.mongodb.net/myProfile?retryWrites=true&w=majority";

// mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
//         .then(()=>{
//             console.log("DM connected successfully....")
//         });


// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//     }, err => {
//     if(err) throw err;
//     console.log('Connected to MongoDB!!!')
// })


app.use(express.json());

// app.use("/auth", authRoute);
// app.use("/user", userRoute)
app.use('/user', homeRoute);
app.use("/", (req, res)=>{
    res.json({name:"Ravi", city:"Indore"})
});

app.listen(process.env.PORT|| 8800, ()=>{
    console.log("server is started at " , process.env.PORT)
});