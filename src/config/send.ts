import { hashPassword } from "services/user.service";
import { prisma } from "./client"
import { ACCOUNT_TYPE } from "config/constant";

const initDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();


    if (countRole === 0) {
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
    }
    if (countUser === 0) {
        const defaultPassword = await hashPassword("123456")
        const adminRole = await prisma.role.findFirst({
            where: { name: 'ADMIN' }
        })
        if (adminRole)
            await prisma.user.createMany({
                data: [
                    {
                        username: "cuong",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        fullName: "cuongg",
                        roleId: adminRole.id
                    },
                    {
                        username: "khang",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        fullName: "khang",
                        roleId: adminRole.id
                    },
                    {
                        username: "chimm",
                        password: defaultPassword,
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        fullName: "chim",
                        roleId: adminRole.id
                    },
                ]
            })
    }
    if (countUser !== 0 && countRole !== 0) {
        console.log("have data")
    }
}
export { initDatabase };