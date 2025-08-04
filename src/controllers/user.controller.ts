import { Request, Response } from "express";
import { getAllUsers, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    // console.log("check", users)
    return res.render('home', {
        users: users
    })
}
const postUpdateUserPage = async (req: Request, res: Response) => {
    const { id, fullName, email, address } = req.body;
    await updateUserById(id, fullName, email, address);
    console.log({ id, fullName, email, address });
    return res.redirect('/')
}
const getUserPage = (req: Request, res: Response) => {

    return res.render('create-user')

}

const postUserPage = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;

    const a = await handleCreateUser(fullName, email, address);
    return res.redirect('/') //chuyen huong
}
const postDeleteUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect('/');
}
const getViewUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    // console.log("check user", user)
    return res.render('view-user.ejs', {
        id: id,
        user: user
    })
}
export { getHomePage, getUserPage, postUserPage, postDeleteUserPage, getViewUserPage, postUpdateUserPage };