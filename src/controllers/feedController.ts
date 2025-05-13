import { Request, Response, NextFunction } from "express";
import { Products, Product } from "../models/ProductModel";
import { FeedService } from "../services/FeedService";

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

        // if (!req.params.feedID.match(/^[0-9a-fA-F]{24}$/)) {
        //     return res.status(400).json({ message: "Invalid Feed ID format" });
        // }

        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        next(error);
    }
};

