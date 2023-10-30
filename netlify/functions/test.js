import fetch from "node-fetch";
const Papa = require("papaparse"),
  fs = require("fs");

exports.handler = async function () {
  const beer_csv =
    "https://raw.githubusercontent.com/clement-massit/serverless-functions/main/dist/data.csv";

  const response = await fetch(beer_csv);
  const textResp = await response.text();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: textResp,
    }),
  };
};
