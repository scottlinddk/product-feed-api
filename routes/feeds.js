const express = require('express'); // require express because we want to use it
const router = express.Router(); // router variable becuase here we are creating routes
const axios = require('axios');

// let getFacts = async (feedID) => {
//   // let response = await axios(`https://catfact.ninja/fact`);
//   let response = await axios(
//     `https://www.partner-ads.com/dk/feedudtraek_hent.php?dl=0&rid=${feedID}`
//   );
//   return response;
// };

// let exportFeed = async (req, res) => {
//   let responseFact = await getFacts(req.params.feedID);
//   console.log(req.params.feedID);

//   // console.log(responseFact); // hele XML response
//   res.send('virker fra exportFeed');
// };

// router.get('/:feedID', async (req, res) => {
//   console.log(`feedID er: ${req.params}`);
//   try {
//     const res = await axios.get(
//       'https://api.neoscan.io/api/main_net/v1/get_all_nodes'
//     );
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });
// module.exports = exportFeed; // We're exporting the router
