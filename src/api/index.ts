import app from "../app.js";
import { config } from "../config/config.js";
const env: string = process.env.NODE_ENV || "development";
const port = config[env]?.port || 3000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});

