const Towdrive = require("../models/Towdrive");
const Towmast = require("../models/Towmast");
const mongoose = require("mongoose");

module.exports.createData = (reqBody) => {
  const { towmast, driver, towinv } = reqBody;
  const towmastId = new mongoose.Types.ObjectId(towmast);
  const towinvId = new mongoose.Types.ObjectId(towinv);
  const driverId = new mongoose.Types.ObjectId(driver);

  let newReqBody = {
    ...reqBody,
    towmast: towmastId,
    driver: driverId,
    dispinv2: towinvId,
  };

  let newData = new Towdrive(newReqBody);

  return newData.save().then((data, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("data added successfully", data);

      Towmast.findByIdAndUpdate(
        towmastId,
        {
          $push: {
            towdrives: [data._id],
          },
        },
        { new: true }
      )
        .exec()
        .then((updatedTowmast) => {
          console.log("Updated Towmast:", updatedTowmast);
        })
        .catch((err) => {
          console.error(err);
        });
      return true;
    }
  });
};

module.exports.getAllData = () => {
  return Towdrive.find()
    .populate("driver")
    .populate("towmast")
    .exec()
    .then((result) => {
      return result;
    });
};

module.exports.getOneData = async (reqParams) => {
  try {
    let result = await Towdrive.findById(reqParams.id);
    return result;
  } catch (error) {
    return "failed to fetch";
  }
};

module.exports.updateDate = (reqParams, reqBody) => {
  const {
    dispnumdrv,
    invoicenum,
    driver,
    towtagnum,
    trucknum,
    timerec,
    timecall,
    timeinrt,
    timearrive,
    timeintow,
    timeardst,
    timeclear,
    timeeta,
    startmile,
    endmile,
    compercent,
    commision,
    creationda,
    computer_n,
    last_edit,
    whenappend,
    geotrka,
    geotrkb,
    drvcnt,
    editbywho,
    drawer,
    enterbywho,
    mileage1,
    mileage2,
    mileage3,
    history,
    foxtow_id,
    datesent,
    sentstatus,
    batch,
    directions,
    subcontrac,
    fleet_num,
    readytogo,
    locked,
  } = reqBody;

  let newData = new Towdrive({
    dispnumdrv,
    invoicenum,
    driver,
    towtagnum,
    trucknum,
    timerec,
    timecall,
    timeinrt,
    timearrive,
    timeintow,
    timeardst,
    timeclear,
    timeeta,
    startmile,
    endmile,
    compercent,
    commision,
    creationda,
    computer_n,
    last_edit,
    whenappend,
    geotrka,
    geotrkb,
    drvcnt,
    editbywho,
    drawer,
    enterbywho,
    mileage1,
    mileage2,
    mileage3,
    history,
    foxtow_id,
    datesent,
    sentstatus,
    batch,
    directions,
    subcontrac,
    fleet_num,
    readytogo,
    locked,
  });

  return Towdrive.findByIdAndUpdate(reqParams.id, newData).then(
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
  return Towdrive.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
