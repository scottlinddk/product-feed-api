import { Router } from "express";
const router = Router();
import { getProducts } from "../controllers/feedController.js";

const baseUrl: string = "/feed/";

router.get(`${baseUrl}getById/:feedID`, (req, res, next) => {
    try {
        getProducts(req, res, next);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Define a route to serve the HTML file
router.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile('../index.html');
});


export default router;

