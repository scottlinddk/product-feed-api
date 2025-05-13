import { Request, Response, NextFunction } from "express";
import { Products, PagedProducts } from "../models/ProductModel.js";
import { FeedService } from "../services/FeedService.js";

// Create an item
// export const createItem = (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { name } = req.body;
//         const newItem: Item = { id: Date.now(), name };
//         items.push(newItem);
//         res.status(201).json(newItem);
//     } catch (error) {
//         res.status(500).json({ message: "Internal Server Error" });
//         next(error);
//     }
// };

// Read all items
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params.feedID) {
            return res.status(400).json({ message: "Feed ID is required" });
        }

        const items: (typeof Products)[] = await FeedService.getFeed(req.params.feedID);

        if (!items.length) {
            return res.status(404).json({ message: "No items found" });
        }
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedItems: (typeof Products)[] = items.slice(startIndex, endIndex) as (typeof Products)[];
        const totalPages = Math.ceil(items.length / limit);
        const totalItems = items.length;
        const pagedProducts: PagedProducts = {
            page,
            totalPages,
            totalItems,
            limit,
            items: paginatedItems,
            previousPage: startIndex > 0 ? `?page=${page - 1}&limit=${limit}` : null,
            nextPage: endIndex < items.length ? `?page=${page + 1}&limit=${limit}` : null,
            hasPreviousPage: startIndex > 0,
            hasNextPage: endIndex < items.length
        } as PagedProducts;

        res.json(pagedProducts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        next(error);
    }
};

