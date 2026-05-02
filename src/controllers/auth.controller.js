const mongoose = require("mongoose");
const User = require("../models/User.model.js");
const {generateAccessToken, generateRefreshToken} = require("../utils/generateToken.js");

const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      isVerified,
      loginAttempts,
      lockUntil,
      refereshToken,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists!",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      role,
      isVerified,
      loginAttempts,
      lockUntil,
      refereshToken,
    });

    res.status(201).json({
        success: true,
        message: 'Registration Successful!'
    });
  } catch (err) {
    res.status(500).json({
        message: err.message
    });
  }
};

const login = async (req, res) => {
  const {email, password} = req.body;

  const userExists = await User.findOne({email});

  if(!userExists){
    return res.status(404).json({
        message:  'User Not Found! Please Register first and then try login'
    });
  }

  const userPasswordExists = await userExists.comparePassword(password);

  if(!userPasswordExists){
    return res.status(401).json({
        message: 'Invalid Password'
    });
  }

  const accessToken = generateAccessToken(userExists._id);
  const refreshToken = generateRefreshToken(userExists._id);

  userExists.refereshToken = refreshToken;

  await userExists.save();

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict'
  });

  res.status(200).json({
    success: true,
    message: 'Login Successful',
    accessToken
  });
};

const logout = async (req, res) => {
  res.clearCookie('refreshToken');

  res.status(200).json({
    success: true,
    message: 'Log out Successful'
  })
};

module.exports = {
  register,
  login,
  logout,
};
