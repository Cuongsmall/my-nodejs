import { Request, Response } from "express";

const getAdminCreateProductPage = async (req: Request, res: Response) => {

    return res.render('admin/product/create')
}

const postAdminCreateProduct = async (req: Request, res: Response) => {
    const { name } = req.body;
    return res.redirect('admin/product')
}

export { getAdminCreateProductPage, postAdminCreateProduct }