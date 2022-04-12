// this is going to be a class definition - to communicate with the database
const config = require('config');

const sql = require('mssql');
const axios = require('axios');
const con = config.get('dbConfig_UCN');

const Joi = require('joi');

class Feed {
  // class is a blueprint and tells us what a book should look like
  // constructor makes this possible and turns the Book class in to an "actual" book
  // "constructor turns blueprint into an object"
  // constructor(bookObj) {
  //   this.bookid = bookObj.bookid;
  //   this.title = bookObj.title;
  //   this.year = bookObj.year;
  //   this.link = bookObj.link;
  // }

  //   // using joi module to validate if the object is a book
  //   // creating a static class method (same as a function, but called class method when it's inside a class)
  //   static validate(bookWannabeObj) {
  //     const schema = Joi.object({
  //       // set up to rules for the class we're in (book in this case)
  //       bookid: Joi.number().integer().min(1),
  //       title: Joi.string().min(1).max(255),
  //       year: Joi.number().integer(),
  //       link: Joi.string().uri().max(255),
  //     });

  //     return schema.validate(bookWannabeObj);
  //   }

  static readAll(feedID) {
    // Return a promise
    return new Promise((resolve, reject) => {
      (async () => {
        // Make a request for a user with a given ID

        await axios
          .get(
            `https://www.partner-ads.com/dk/feedudtraek_hent.php?dl=0&rid=${feedID}`
          )
          .then(function (response) {
            // handle success
            console.log(response);
            return response;
          })
          .catch(function (error) {
            // handle error
            console.log(error + ' fra feed constructor');
          })
          .then(function () {
            // always executed
          });
      })();
    });
  }
}

module.exports = Feed;
// access to the Book class for outside this file
