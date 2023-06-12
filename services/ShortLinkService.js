const axios = require("axios");

exports.getShortLink = async (incomingUrl) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("url", incomingUrl);

    const options = {
        method: "POST",
        url: "https://url-shortener23.p.rapidapi.com/shorten",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "d0b7c5ff35mshf078dacc7757867p1b63bbjsn943bddcbb2b3",
            "X-RapidAPI-Host": "url-shortener23.p.rapidapi.com"
        },
        data: {
            url: incomingUrl
        }
    };

    try {
        const response = await axios.request(options);
        // console.log(response.data.short_url);
        return response.data.short_url;
    } catch (error) {
        console.error(error);
    }
};
