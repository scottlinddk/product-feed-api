import { Product } from "../models/ProductModel.js";
import { validate } from "../utils/validator.js";
import { FeedService } from "./FeedService.js";

const isOffer = (oldPrice?: string, newPrice?: string) => {
    if (!oldPrice || !newPrice) {
        return false;
    }
    const newPriceNum = parseFloat(newPrice?.replace(",", "."));
    const oldPriceNum = parseFloat(oldPrice?.replace(",", "."));
    return oldPriceNum > newPriceNum;
};

export class ProductService {
    static async getMappedProducts(feedId: string) {
        try {
            const feed = await FeedService.getFeed(feedId);
            const mappedProducts = await Promise.all(
                // add model to product
                feed.produkter.produkt.map(async (product: Product) => {
                    let vareUrl: string | undefined = undefined;
                    if (!product) {
                        return null;
                    }

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
                        tilbud: {
                            aktiv: isOffer(product.glpris, product.nypris)
                        } as Product
                    };
                })
            );
            console.log(mappedProducts);
            return mappedProducts;
        } catch (error) {
            return error;
        }
    }
}

module.exports = ProductService;

