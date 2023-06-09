const express = require('express');
const router = express.Router();
const axios = require('axios');
const X2JS = require('x2js');
const parser = new X2JS();

async function getFeed(feedID) {
  baseUrl = 'https://www.partner-ads.com/dk/feedudtraek_hent.php?dl=0&rid=';

  try {
    let response = await axios({
      method: 'get',
      url: baseUrl + feedID,
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
    });
    const decoder = new TextDecoder('ISO-8859-1');
    const decoded = decoder.decode(response.data);
    return decoded;
  } catch (error) {
    return error
  }
};

let parseFeedToJSON = (XMLFeed) => {
  let JSONObj = parser.xml2js(XMLFeed);
  return JSONObj;
};

router.get('/feed/:feedID', async (req, res) => {
  let feedID = req.params.feedID;
  let responseFeed = await getFeed(feedID);
  let parsedToJSON = parseFeedToJSON(responseFeed);
  res.send(parsedToJSON);
});

module.exports = router;
