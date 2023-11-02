const Driver = require("../models/Driver");

module.exports.getAllData = () => {
  return Driver.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Driver.findById(reqParams.id);
    return result;
  } catch (error) {
    return "failed to fetch";
  }
};

module.exports.updateDate = (reqParams, reqBody) => {
  const { name } = reqBody;

  let newData = {
    name,
  };

  return Driver.findByIdAndUpdate(reqParams.id, newData).then(
    (update, error) => {
      if (error) {
        return false;
      } else {
        console.log("updated successfully", update);
        return true;
      }
    }
  );
};

module.exports.deleteData = (reqParams, reqBody) => {
  return Driver.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
