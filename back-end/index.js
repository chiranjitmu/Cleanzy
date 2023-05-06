import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt';
import Joi from 'joi';
import nodemailer from 'nodemailer'

//appconfig
const app = express();
const port = process.env.PORT || 5000;
const connection = "{mongodb connection}";

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//dbconnect
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Enter your email'],
    unique: true,
    match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ //validate for email format
  },
  password: {
    type: String,
    required: [true, 'Enter your password']
  },
  number: {
    type: String,
    required: [true, 'Enter your number'],
    minlength: 10,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Enter your name']
  }
});

const User = mongoose.model("User", userSchema);


const personalSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Enter your firstname'],
  },
  lastname: {
    type: String,
    required: [true, 'Enter your lastname']
  },
  dob: {
    type: Date,
    required: [true, 'Enter your DOB'],
  },
  nationality: {
    type: String,
    required: [true, 'Enter your nationality']
  }
});

const Personal = mongoose.model("Personal", personalSchema);




const vehicleSchema = new mongoose.Schema({
  cartype: {
    type: String,
    required: [true, 'Enter your car type'],
  },
  carbrand: {
    type: String,
    required: [true, 'Enter your car brand']
  },
  carmodel: {
    type: String,
    required: [true, 'Enter your car model'],
  },
  carvariant: {
    type: String,
    required: [true, 'Enter your car variant']
  },
  carregdno: {
    type: String,
    required: [true, 'Enter your car regd-no']
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);



//validation schema
// model schema and this name should not be same
const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  number: Joi.string().length(10).required(),
  name: Joi.string().required(),
});

const loginSchema = Joi.object({
  loginemail: Joi.string().email().required(),
  loginpassword: Joi.string().min(6).required(),
});

const perSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  dob: Joi.date().required(),
  nationality: Joi.string().required(),
});


const vehSchema = Joi.object({
  cartype: Joi.string().required(),
  carbrand: Joi.string().required(),
  carmodel: Joi.string().required(),
  carvariant: Joi.string().required(),
  carregdno: Joi.string().required(),
});



// signup


app.post('/signup', async (req, res) => {
  try {
    //validate input from joi
    const { error } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { email, password, name, number } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, name, number });
    res.json({ message: 'signup success'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//personal


app.post('/personal-info', async (req, res) => {
  try {
    //validate input from joi
    const { error } = perSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { firstname, lastname, dob, nationality } = req.body;
    const success = await Personal.create({ firstname, lastname, dob, nationality });
    res.json({ message: 'submitted successfull'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//vehicle

app.post('/vehicle-info', async (req, res) => {
  try {
    //validate input from joi
    const { error } = vehSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { cartype, carbrand, carmodel, carvariant, carregdno } = req.body;
    const success = await Vehicle.create({ cartype, carbrand, carmodel, carvariant, carregdno });
    res.json({ message: 'submitted successfull'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// login


app.post('/login', async (req, res) => {
  try {
    //validate input from joi
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { loginemail, loginpassword } = req.body;
    const user = await User.findOne({ email: loginemail });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    const isPasswordValid = await bcrypt.compare(loginpassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// otp



app.post('/send-otp', (req, res) => {
  const { logemail, otp } = req.body;
  

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '{your gmail}',
            pass: '{paste gmail app password and also on the 2fa verification of app password}'
        }
    });
  const mailOptions = {
    from: '{your gmail}',
    to: logemail,
    subject: 'Your OTP',
    text: `Your Otp is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.sendStatus(200);
    }
  });
});


//listener
app.listen(port, () => console.log(`listening on localhost ${port}`));