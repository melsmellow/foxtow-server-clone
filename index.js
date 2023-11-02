const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const formidable = require("express-formidable");
require("dotenv").config();
const Calltype = require("./models/Calltype");

const mongodbUser = process.env.MONGODB_USER;
const mongodbpassword = process.env.MONGODB_PASSWORD;
// config

const port = 5000;
const app = express();
// routes here

const towMastRoutes = require("./routes/towmast");
const towDriveRoutes = require("./routes/towdrive");
const useRoutes = require("./routes/user");
const companyRoutes = require("./routes/company");
const makeRoutes = require("./routes/make");
const customerRoutes = require("./routes/customer");
const truckRoutes = require("./routes/truck");
const reasonRoutes = require("./routes/reason");
const driverRoutes = require("./routes/driver");
const towinvRoutes = require("./routes/towinv");
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(formidable());
app.listen(port, () => console.log(`server is running at port ${port}`));

// mongodb connection
mongoose.connect(
  `mongodb+srv://foxtowUser:${mongodbpassword}@foxtow1.mut0br4.mongodb.net/foxtow?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.static("public"));
app.use("/towmast", towMastRoutes);
app.use("/towdrive", towDriveRoutes);
app.use("/user", useRoutes);
app.use("/company", companyRoutes);
app.use("/make", makeRoutes);
app.use("/customer", customerRoutes);
app.use("/truck", truckRoutes);
app.use("/reason", reasonRoutes);
app.use("/driver", driverRoutes);
app.use("/towinv", towinvRoutes);
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => console.log("connected to the database"));

// const callArr = [
//   { TYPE: "3", DESCRIP: "30 DAY IMPOUND", ABBRE: "30 Day Imp" },
//   { TYPE: "A", DESCRIP: "ABANDONED", ABBRE: "Abandoned" },
//   { TYPE: "H", DESCRIP: "HOLD FOR EVIDENCE", ABBRE: "Hold" },
//   {
//     TYPE: "I",
//     DESCRIP: "IMPOUND (Release Form Required)",
//     ABBRE: "Impound",
//   },
//   { TYPE: "P", DESCRIP: "PRIVATE PROPERTY", ABBRE: "PrivProp" },
//   { TYPE: "R", DESCRIP: "RECOVERED", ABBRE: "Recovered" },
//   { TYPE: "S", DESCRIP: "STORED", ABBRE: "Stored" },
//   { TYPE: "T", DESCRIP: "TOWED", ABBRE: "Towed" },
//   { TYPE: "W", DESCRIP: "WRECK", ABBRE: "Wreck" },
// ];

// for (const item of callArr) {
//   console.log(item);

//   const newData = new Calltype({
//     type: item.TYPE,
//     descrip: item.DESCRIP,
//     abbre: item.ABBRE,
//   });
//   newData.save();

//   // const [key, value] = item;
//   // const makeDocument = new Make({
//   //   make: item.MAKE.toLowerCase(), // Convert to lowercase
//   //   descrip: item.DESCRIP.toLowerCase(), // Convert to lowercase
//   // });
//   // makeDocument.save();
// }
