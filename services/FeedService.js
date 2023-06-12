const axios = require("axios");
const X2JS = require("x2js");
const parser = new X2JS();

exports.getFeed = async (feedId) => {
    baseUrl = "https://www.partner-ads.com/dk/feedudtraek_hent.php?dl=0&rid=";

    try {
        let response = await axios({
            method: "get",
            url: baseUrl + feedId,
            responseType: "arraybuffer",
            responseEncoding: "binary"
        });
        const decoder = new TextDecoder("ISO-8859-1");
        const decoded = decoder.decode(response.data);
        const parsedToJSON = parseFeedToJSON(decoded);
        return parsedToJSON.produkter.produkt;
    } catch (error) {
        return error;
    }
};

let parseFeedToJSON = (XMLFeed) => {
    let JSONObj = parser.xml2js(XMLFeed);
    return JSONObj;
};
