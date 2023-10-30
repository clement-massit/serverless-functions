import fetch from "node-fetch";
const Papa = require("papaparse"),
  fs = require("fs");

exports.handler = async function () {
  // const beer_csv =
  //   "https://raw.githubusercontent.com/clement-massit/serverless-functions/main/dist/data.csv";

  // const response = await fetch(beer_csv);
  // const textResp = await response.text();
  // console.log(textResp);
  const POKE_API = "https://pokeapi.co/api/v2/pokedex/kanto";

  const response = await fetch(POKE_API);
  const data = await response.json();
  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: data,
    }),
  };
};
