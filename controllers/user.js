const auth = require("../auth");
const bcrypt = require("bcrypt");

const User = require("../models/User");

const getAllData = async () => {
  return await User.find().then((result) => {
    return result;
  });
};

const registerUser = async (reqBody) => {
  let newUser = new User({
    email: reqBody.email,
    password: bcrypt.hashSync(reqBody.password, 10),
    company: reqBody.company ?? "",
  });

  //   check if email exist
  const find = await User.findOne({ email: reqBody.email });
  if (find) {
    return {
      message: "email already exist!",
    };
  } else {
    return newUser.save().then((data, error) => {
      if (error) {
        return false;
      } else {
        return true;
      }
    });
  }
};

const userLogin = async (reqBody, reqFields) => {
  console.log(reqBody);
  console.log(reqFields);
  const result = await User.findOne({
    email: reqBody.email ?? reqFields.email,
  }).populate("company");
  if (result === null) {
    return { message: "user doesn't exist" };
  } else {
    let accessToken = await { access: auth.createAccessToken(result) };
    const isPasswordCorrect = bcrypt.compareSync(
      reqBody.password ?? reqFields.password,
      result.password
    );

    if (isPasswordCorrect) {
      return { data: accessToken, user: result };
    } else {
      return { message: "incorrect password" };
    }
  }
};

const getUserDetails = async (id) => {
  try {
    return await User.findById(id)
      .populate("company")
      .then((result) => {
        return result;
      });
  } catch (error) {
    return false;
  }
};

module.exports = { userLogin, registerUser, getAllData, getUserDetails };
