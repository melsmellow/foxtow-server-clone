const mongoose = require("mongoose");

const clubtowsSchema = new mongoose.Schema(
  {
    dispnum: Number,
    towdate: Date,
    refnumber: { type: String, maxlength: 15 },
    total: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    totalpaid: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    callactnum: { type: String, maxlength: 8 },
    timerec: { type: String, maxlength: 5 },
    timeinrt: { type: String, maxlength: 5 },
    timeclear: { type: String, maxlength: 5 },
    towedfrom: { type: String, maxlength: 60 },
    towedto: { type: String, maxlength: 60 },
    reason: { type: String, maxlength: 20 },
    driver: { type: String, maxlength: 8 },
    trucknum: { type: String, maxlength: 4 },
    commission: Boolean,
    invoicenum: { type: String, maxlength: 10 },
    yearcar: { type: String, maxlength: 2 },
    makecar: { type: String, maxlength: 12 },
    colorcar: { type: String, maxlength: 12 },
    modelcar: { type: String, maxlength: 15 },
    membernum: { type: String, maxlength: 20 },
    memexpdate: { type: String, maxlength: 5 },
    startmile: Number,
    endmile: Number,
    callphone: { type: String, maxlength: 17 },
    dispatcher: { type: String, maxlength: 8 },
    towtagnum: { type: String, maxlength: 10 },
    ponumber: { type: String, maxlength: 15 },
    licensest: { type: String, maxlength: 50 },
    licensenum: { type: String, maxlength: 7 },
    vin: { type: String, maxlength: 17 },
    paytype: { type: String, maxlength: 3 },
    curbalance: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    itemgroup: { type: String, maxlength: 2 },
    hold: Boolean,
    pay: Boolean,
    holdnote: { type: String, maxlength: 15 },
    orgdispnum: Number,
    notes: { type: String, maxlength: 60 },
    whnappend: Date,
    editbywho: { type: String, maxlength: 14 },
    bodytype: { type: String, maxlength: 6 },
    tagmonthye: { type: String, maxlength: 50 },
    type: { type: String, maxlength: 1 },
    updatetime: Date,
    callname: { type: String, maxlength: 30 },
    paidout: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    datepurc: Date,
    datedism: Date,
    lregexpire: Date,
    purchacct: { type: String, maxlength: 6 },
    purchname: { type: String, maxlength: 30 },
    purchaddr1: { type: String, maxlength: 30 },
    purchcity: { type: String, maxlength: 15 },
    purchstate: { type: String, maxlength: 50 },
    purchzip: { type: String, maxlength: 5 },
    noticesign: Date,
    fueltype: { type: String, maxlength: 10 },
    lacqnum: Number,
    option1: Number,
    option2: Number,
    option3: Number,
    engine: { type: String, maxlength: 17 },
    enginegone: Boolean,
    datein: Date,
    dateout: Date,
    odometer: { type: String, maxlength: 7 },
    lientype: { type: String, maxlength: 2 },
    liendin: Date,
    lienfee: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    vstatus: { type: String, maxlength: 20 },
    howran: { type: String, maxlength: 1 },
    keysinfo: { type: String, maxlength: 3 },
    condition: { type: String, maxlength: 40 },
    lienvalue: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    lotsection: { type: String, maxlength: 4 },
    calltype: { type: String, maxlength: 2 },
    perday: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    storagetyp: { type: String, maxlength: 2 },
    enterbywho: { type: String, maxlength: 14 },
    days: Number,
    perdaytota: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    lienholdno: { type: String, maxlength: 15 },
    buyname: { type: String, maxlength: 30 },
    buyaddr: { type: String, maxlength: 30 },
    buycity: { type: String, maxlength: 15 },
    buystate: { type: String, maxlength: 2 },
    buyzip: { type: String, maxlength: 10 },
    buydlid: { type: String, maxlength: 8 },
    buyphone: { type: String, maxlength: 18 },
    sellamt: { type: Number, get: (v) => parseFloat(v).toFixed(4) },
    datesold: Date,
    liendout: Date,
    billtoact: { type: String, maxlength: 8 },
  },
  { timestamps: true }
);

const ClubTows = mongoose.model("ClubTows", clubtowsSchema);

module.exports = ClubTows;
