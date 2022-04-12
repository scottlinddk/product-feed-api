const express = require('express'); // require express because we want to use it
const router = express.Router(); // router variable becuase here we are creating routes
// const Feed = require('../models/feed'); // Requiring the book class from Models/book.js
const axios = require('axios');
const X2JS = require('x2js');
const res = require('express/lib/response');
const parser = new X2JS();
const iconv = require('iconv-lite');

// const feeds = require('./feeds'); // Requiring the book class from Models/book.js

// router.get('/feed/:feedID', feeds);
let response;
let getFeed = async (feedID) => {
  baseUrl = 'https://www.partner-ads.com/dk/feedudtraek_hent.php?dl=0&rid=';

  // let response = await axios(`https://catfact.ninja/fact`);
  // let response = await axios(baseUrl + feedID, reqParams);
  let response = await axios({
    method: 'get',
    url: baseUrl + feedID,
    // responseEncoding: 'utf-8',
    // responseType: 'text',
    responseType: 'arraybuffer',
    responseEncoding: 'binary',
  });
  const decoder = new TextDecoder('ISO-8859-1');
  const decoded = decoder.decode(response.data);

  return decoded;
};

let parseFeedToJSON = (XMLFeed) => {
  // let getXMLFeed = await getFeed(feedID);
  const xmlDoc = parser.js2xml(XMLFeed);
  console.log(XMLFeed);
  let JSONObj = parser.xml2js(XMLFeed);
  // let JSONObj = parser.xml2js(xmlDoc);
  console.log(JSONObj);

  return JSONObj;
};

router.get('/feed/:feedID', async (req, res) => {
  let feedID = req.params.feedID;
  let responseFeed = await getFeed(feedID);
  console.log(feedID);
  console.log(typeof responseFeed + ' res feed');
  // console.log(responseFeed);
  // let parsedToJSON = JSON.stringify(parseFeedToJSON(responseFeed.data));
  let parsedToJSON = parseFeedToJSON(responseFeed);

  // let toJSON = JSON.stringify(responseFeed);

  // console.log(responseFeed.data); // hele XML response

  // console.log(responseFeed); // hele Parsed JSON response
  // res.send('virker fra exportFeed');
  res.send(parsedToJSON);
});
router.get('/test', async (req, res) => {
  res.send('test heroku deployment');
});

module.exports = router; // We're exporting the router
