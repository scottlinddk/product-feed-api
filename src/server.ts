import { app } from "./app";
import { config } from "./config/config";
const env: string = process.env.NODE_ENV || "development";
const port = config[env]?.port || 3000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});

