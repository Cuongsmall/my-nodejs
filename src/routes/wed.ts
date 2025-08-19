import express, { Express } from 'express';
import { getHomePage, getUserPage, postUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage } from '../controllers/user.controller';
import { getAdminOrderPage, getAdminProductPage, getAdminUserPage, getDashboardPage, getViewProductPage, postDeleteProduct } from 'controllers/admin/dashboard';
import fileUploadMiddleware from 'src/middleware/multer';
import { getProductPage } from 'controllers/client/product.controller';
import { getAdminCreateProductPage, postAdminCreateProduct } from 'controllers/admin/product.controller';

const router = express.Router();

const webRouters = (app: Express) => {


    // router.get("/create-user", (req, res) => {
    //     res.send("Hello cuong 123")
    // })
    router.get("/", getHomePage)
    router.get("/product/:id", getProductPage)

    router.post("/admin/delete-user/:id", postDeleteUserPage)
    router.get("/admin/view-user/:id", getViewUserPage)
    router.post("/admin/update-user", fileUploadMiddleware("avatar"), postUpdateUserPage)
    app.use("/", router);

    //admin routes
    router.get("/admin", getDashboardPage)
    router.get("/admin/create-user", getUserPage)
    router.post("/admin/create-user", fileUploadMiddleware("avatar"), postUserPage)
    router.get("/admin/user", getAdminUserPage)
    router.get("/admin/order", getAdminOrderPage)

    router.get("/admin/product", getAdminProductPage)
    router.get("/admin/create-product", getAdminCreateProductPage)
    router.post("/admin/create-product", fileUploadMiddleware("image", "images/product"), postAdminCreateProduct)
    router.get("/admin/view-product/:id", getViewProductPage)
    router.post("/admin/delete-product/:id", postDeleteProduct)
    router.post("/admin/update-product/:id", getViewProductPage)
}
export default webRouters;

