const Towinv = require("../models/TowInv");

module.exports.createData = (reqBody) => {
  let newData = new Towinv(reqBody);

  return newData.save().then((data, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("data added successfully", data);
      return data;
    }
  });
};

module.exports.getAllData = () => {
  return Towinv.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Towinv.findById(reqParams.id);
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

  return Towinv.findByIdAndUpdate(reqParams.id, newData).then(
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
  return Towinv.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
