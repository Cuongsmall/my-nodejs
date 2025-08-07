import { prisma } from "config/client";
import getConnection from "../config/database"
import { PrismaClient, Prisma } from '@prisma/client'


const handleCreateUser = async (fullName: string, email: string, address: string) => {

    const newUser = await prisma.user.create({
        data: {
            fullName: fullName,
            username: email,
            address: address,
            password: "",
            accountType: "",
        }
    })
    return newUser;
}
const handleDeleteUser = async (id: string) => {
    const user = await prisma.user.delete({
        where: {
            id: +id,
        },
    })
}
const getUserById = async (id: string) => {
    const user = prisma.user.findUnique({
        where: {
            id: +id
        }
    });
    return user;
}
const updateUserById = async (id: string, fullName: string, email: string, address: string) => {
    const user = await prisma.user.update({
        where: {
            id: +id, // conver tu number >string +
        },
        data: {
            fullName: fullName,
            username: email,
            address: address,
            password: "",
            accountType: "",
        },
    })
}
const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const getAllRoles = async () => {
    const roles = await prisma.role.findMany();
    return roles;
}
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById, getAllRoles }