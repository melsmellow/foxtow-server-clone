const Truck = require("../models/Truck");

module.exports.getAllData = () => {
  return Truck.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Truck.findById(reqParams.id);
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

  return Truck.findByIdAndUpdate(reqParams.id, newData).then(
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
  return Truck.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
