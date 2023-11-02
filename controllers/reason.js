const Reason = require("../models/Reason");

module.exports.getAllData = () => {
  return Reason.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Reason.findById(reqParams.id);
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

  return Reason.findByIdAndUpdate(reqParams.id, newData).then(
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
  return Reason.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
