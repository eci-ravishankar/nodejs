let express = require("express");
let app = express();
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
// const homeRoute = require("./routes/home");
const PORT = process.env.PORT;

dotenv.config({ path: '.env' });

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true})
//         .then(()=>{
//             console.log("DM connected successfully....")
//         });

// const URI = "mongodb+srv://ravi_sahu:Sahu45a@cluster0.4upeo.mongodb.net/myProfile?retryWrites=true&w=majority";

// mongoose.connect(URI, {
//    useNewUrlParser: true, 
//    useUnifiedTopology: true 
// }, err => {
//    if(err) throw err;
//    console.log('Connected to MongoDB!!!')
// })

// const connectDB = async () => {
//     try {
//       console.log(URI);
//       await mongoose.connect(`${URI}`, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log('MongoDB connected');
//     } catch (error) {
//       console.log(error.message);
//       process.exit(1);
//     }
//   };

//   connectDB()

app.use(express.json());

// app.use("/auth", authRoute);
// app.use("/user", userRoute)
app.use("/", (req, res)=>{
    res.json({name:"Ravi", city:"Indore"})
});

app.listen(process.env.PORT|| 8800, ()=>{
    console.log("server is started at " , process.env.PORT)
});