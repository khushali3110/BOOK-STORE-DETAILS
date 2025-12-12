const { default: mongoose } = require("mongoose");

const dbConfig = () => {
  mongoose
    .connect(process.env.DATA_URL)
    .then(() => console.log("mongoose db connect"))
    .catch((err) => console.log(err));
};

module.exports = dbConfig;