import express, { Express } from 'express';
import { getHomePage, getUserPage, postUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage } from '../controllers/user.controller';
import { getAdminUserPage, getDashboardPage } from 'controllers/admin/dashboard';
const router = express.Router();

const webRouters = (app: Express) => {


    // router.get("/create-user", (req, res) => {
    //     res.send("Hello cuong 123")
    // })
    router.get("/", getHomePage)
    router.get("/create-user", getUserPage)
    router.post("/create-user", postUserPage)
    router.post("/delete-user/:id", postDeleteUserPage)
    router.get("/view-user/:id", getViewUserPage)
    router.post("/update-user", postUpdateUserPage)
    app.use("/", router);

    //admin routes
    router.get("/admin", getDashboardPage)
    router.get("/admin/user", getAdminUserPage)
}
export default webRouters;

