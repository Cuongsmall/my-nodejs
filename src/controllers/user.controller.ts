import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    // console.log("check", users)
    return res.render('home', {
        users: users
    })
}

const getUserPage = (req: Request, res: Response) => {

    return res.render('create-user')

}

const postUserPage = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    await handleCreateUser(fullName, email, address);
    return res.redirect('/') //chuyen huong
}
export { getHomePage, getUserPage, postUserPage };