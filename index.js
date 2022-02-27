let express = require("express");
let app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config({ path: '.env' });

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("DM connected successfully....")
        });
mongoose.set('useFindAndModify', false)

app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute)

app.listen(8800, ()=>{
    console.log("server is started at 8080")
});