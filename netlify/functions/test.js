const fetch = require("node-fetch");
const Papa = require("papaparse"),
  fs = require("fs");

exports.handler = async function () {
  let csv = fs.readFileSync("./netlify/functions/data.csv", "utf-8");
  let csv_json = Papa.parse(csv, { encoding: "utf-8" });
  console.log(csv_json.data);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: csv_json.data,
    }),
  };
};
