require('dotenv/config');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const clinicsRouter = require('./routes/clinics');
const doctorsRouter = require('./routes/doctors');
const authRouter = require('./routes/users');
const cookieParser = require('cookie-parser');
const path=require ('path');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/api/clinics/', clinicsRouter);
app.use('/api/doctors/', doctorsRouter);
app.use('/auth', authRouter);
if (process.env.NODE_ENV==='production'){
    const buildPath=path.join(__dirname,'../client/build');
    app.use(express.static(buildPath));

    app.get('*',(req,res)=> {
        res.sendFile(path.join(buildPath,'index.html'));
    } );
}
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
