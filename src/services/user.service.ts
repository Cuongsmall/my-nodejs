import { prisma } from "config/client";
import { PrismaClient, Prisma } from '@prisma/client'
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from 'bcrypt';
import { access } from "fs";
const saltRounds = 10;

const hashPassword = async (plainText: string) => {
    return await bcrypt.hash(plainText, saltRounds)
}
const handleCreateUser = async (fullName: string, email: string, address: string, phone: string, avatar: string, role) => {

    const defaultPassword = await hashPassword("123456")
    const newUser = await prisma.user.create({
        data: {
            fullName: fullName,
            username: email,
            address: address,
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            avatar: avatar,
            phone: phone,
            roleId: +role
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
export { handleCreateUser, getAllUsers, handleDeleteUser, getUserById, updateUserById, getAllRoles, hashPassword }