import { prisma } from "./client"

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    if (countUser === 0) {
        await prisma.user.createMany({
            data: [
                {
                    username: "cuong",
                    password: "123",
                    accountType: "SYSTEM",
                    fullName: "cuongg"
                },
                {
                    username: "khang",
                    password: "123",
                    accountType: "SYSTEM",
                    fullName: "khang"
                },
                {
                    username: "chim",
                    password: "123",
                    accountType: "SYSTEM",
                    fullName: "chim"
                },
            ]
        })
    } else if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: "ADMIN",
                    description: "Admin full quyen"
                },
                {
                    name: "USER",
                    description: "User thông thường"
                },

            ]
        })
    } else {
        console.log("have data")
    }
}
export { initDatabase };