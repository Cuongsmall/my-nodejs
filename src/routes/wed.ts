import express, { Express } from 'express';
import { getHomePage, getUserPage, postUserPage } from '../controllers/user.controller';
const router = express.Router();

const webRouters = (app: Express) => {
    router.get("/", getHomePage)

    // router.get("/create-user", (req, res) => {
    //     res.send("Hello cuong 123")
    // })
    router.get("/create-user", getUserPage)
    router.post("/create-user", postUserPage)
    app.use("/", router);
}
export default webRouters;

