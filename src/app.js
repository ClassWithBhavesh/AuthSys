const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use(cookieParser());


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "We are running AuthSys Project for demonstrating the authentication process in actual backend!"
    })
});

app.use('/api/v1/auth', authRoutes);

// Global Error Handler 
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

module.exports = app;