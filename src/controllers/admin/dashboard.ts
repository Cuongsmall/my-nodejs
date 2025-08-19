import { Request, Response } from "express";
import { deleteProductById, getAllProduct, getProductById } from "services/admin/product.service";
import { getAllUsers } from "services/user.service";

const getDashboardPage = async (req: Request, res: Response) => {

    return res.render('admin/dashboard/show')
}
const getAdminUserPage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    console.log("check", users)
    return res.render('admin/user/show', {
        users: users
    })
}
const getAdminProductPage = async (req: Request, res: Response) => {
    const products = await getAllProduct();
    return res.render('admin/product/show', {
        products
    })
}
const getAdminOrderPage = async (req: Request, res: Response) => {
    return res.render('admin/product/show')
}
const getViewProductPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductById(id);
    const factoryOptions = [
        { name: "Apple (MacBook)", value: "APPLE" },
        { name: "Asus", value: "ASUS" },
        { name: "Lenovo", value: "LENOVO" },
        { name: "Dell", value: "DELL" },
        { name: "LG", value: "LG" },
        { name: "Acer", value: "ACER" },
    ];
    const targetOptions = [
        { name: "Gaming", value: "GAMING" },
        { name: "Sinh viên - Văn phòng", value: "SINHVIEN-VANPHONG" },
        { name: "Thiết kế đồ họa", value: "THIET-KE-DO-HOA" },
        { name: "Mỏng nhẹ", value: "MONG-NHE" },
        { name: "Doanh nhân", value: "DOANH-NHAN" },
    ];


    return res.render('admin/product/detail', {
        product, factoryOptions, targetOptions
    })
}
const postDeleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    await deleteProductById(id);
    return res.redirect('/admin/product')
}
export { getDashboardPage, getAdminUserPage, getAdminProductPage, getAdminOrderPage, getViewProductPage, postDeleteProduct }