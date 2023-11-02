const Make = require("../models/Make");

module.exports.createData = (reqBody) => {
  //   console.log(reqBody);
  const { make, descrip } = reqBody;

  let newData = new Make({
    make,
    descrip,
  });

  return newData.save().then((data, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("data added successfully", data);
      return true;
    }
  });
};

module.exports.getAllData = () => {
  return Make.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Make.findById(reqParams.id);
    return result;
  } catch (error) {
    return "failed to fetch";
  }
};

module.exports.updateDate = (reqParams, reqBody) => {
  const { name } = reqBody;

  let newData = {
    make,
    descrip,
  };

  return Make.findByIdAndUpdate(reqParams.id, newData).then((update, error) => {
    if (error) {
      return false;
    } else {
      console.log("updated successfully", update);
      return true;
    }
  });
};

module.exports.deleteData = (reqParams, reqBody) => {
  return Make.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
