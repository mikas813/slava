import express from 'express';
import config from './config.js';
import mongoose from 'mongoose';
import imageRoute from './routes/imageRoute.js';
import userRoute from './routes/userRoute.js';
import uploadRoute from './routes/uploadRoute.js';
import { createRequire } from 'module';
import bodyParser from 'body-parser';

const require = createRequire(import.meta.url);
const path = require('path');
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;
const app = express();

//DataBase
mongoose
    .connect(
        config.dataBaseUrl
        ,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        },
        () => {}
    )
    .catch((error) => console.log(error.reason));

mongoose.connection.on('connected', () => {
    console.log('Mongose is connected!');
});
mongoose.connection.on('error', (err) => {
    console.log('Mongoose Default Connection Error : ' + err);
});

//Server requests
app.use(bodyParser.json());
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/images', imageRoute);
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//Heroku deploy
if (process.env.NODE_ENV !== 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(
    PORT,
    console.log(
        `Server started on port http://localhost:${PORT}, 'NODE_ENV = '${process.env.NODE_ENV}`
    )
);
