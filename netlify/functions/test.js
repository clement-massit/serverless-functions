import fetch from "node-fetch";

exports.handler = async function () {
  //
  const POKE_API =
    "https://raw.githubusercontent.com/clement-massit/serverless-functions/main/netlify/functions/data.json";

  const response = await fetch(POKE_API);
  const data = await response.json();
  console.log(JSON.stringify(data));

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
