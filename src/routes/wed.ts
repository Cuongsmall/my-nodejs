import express, { Express } from 'express';
import { getHomePage, getUserPage, postUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage } from '../controllers/user.controller';
import { getAdminOrderPage, getAdminProductPage, getAdminUserPage, getDashboardPage } from 'controllers/admin/dashboard';
import fileUploadMiddleware from 'src/middleware/multer';
const router = express.Router();

const webRouters = (app: Express) => {


    // router.get("/create-user", (req, res) => {
    //     res.send("Hello cuong 123")
    // })
    router.get("/", getHomePage)


    router.post("/delete-user/:id", postDeleteUserPage)
    router.get("/view-user/:id", getViewUserPage)
    router.post("/update-user", postUpdateUserPage)
    app.use("/", router);

    //admin routes
    router.get("/admin", getDashboardPage)
    router.get("/admin/create-user", getUserPage)
    router.post("/admin/create-user", fileUploadMiddleware("avatar"), postUserPage)
    router.get("/admin/user", getAdminUserPage)
    router.get("/admin/order", getAdminOrderPage)
    router.get("/admin/product", getAdminProductPage)
}
export default webRouters;

