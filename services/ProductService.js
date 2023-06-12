const ValidateService = require("../utils/validator");
const ShortLinkService = require("../services/ShortLinkService");
const FeedService = require("../services/FeedService");

const mapObj = () => {};
const isOffer = (oldPrice, newPrice) => oldPrice > newPrice;

exports.getMappedProducts = async (feedId) => {
    try {
        const feed = await FeedService.getFeed(feedId);
        const mappedProducts = await feed.produkter.produkt.map(async (product) => {
            // console.log(product);
            const vareurl = ValidateService.validate(product.vareurl);
            return {
                forhandler: product.forhandler,
                kategorinavn: product.kategorinavn,
                brand: product.brand,
                produktnavn: product.produktnavn,
                produktid: product.produktid,
                ean: product.ean,
                beskrivelse: product.beskrivelse,
                nypris: product.nypris,
                glpris: product.glpris,
                fragtomk: product.fragtomk,
                lagerantal: product.lagerantal,
                size: product.size,
                color: product.color,
                billedurl: product.billedurl,
                vareurl: product.vareurl,
                // korturl: await ShortLinkService.getShortLink(product.vareurl),
                tilbud: {
                    aktiv: isOffer(product.glpris, product.nypris)
                }
            };
        });
        // console.log(ValidateService.validate("https://scottlind.dk"));
        // console.log(ShortLinkService.getShortLink("https://scottlind.dk"));
        // console.log("stor hest");
        console.log(mappedProducts);
        return mappedProducts;
    } catch (error) {
        return (mappedProducts = []), error;
    }
};
