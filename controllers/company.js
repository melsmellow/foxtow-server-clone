const Company = require("../models/Company");

module.exports.createData = (reqBody) => {
  //   console.log(reqBody);
  const { name } = reqBody;

  let newData = new Company({
    name,
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
  return Company.find().then((result) => {
    return result;
  });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Company.findById(reqParams.id);
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

  return Company.findByIdAndUpdate(reqParams.id, newData).then(
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
  return Company.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
