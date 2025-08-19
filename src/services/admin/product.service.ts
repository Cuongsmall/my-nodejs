import { prisma } from "config/client";

const createProduct = async (
    name: string,
    price: number,
    imageUpload: string,
    detailDesc: string,
    shortDesc: string,
    quantity: number,
    factory: string,
    target: string
) => {
    await prisma.product.create({
        data: {
            name,
            price,
            detailDesc,
            shortDesc,
            quantity,
            factory,
            target,
            ...(imageUpload && { image: imageUpload })
        }
    })
}

const getAllProduct = async () => {
    return await prisma.product.findMany();
}
const getProductById = async (id: string) => {
    return await prisma.product.findUnique({
        where: {
            id: +id
        }
    })
}
const deleteProductById = async (id: string) => {
    await prisma.product.delete({
        where: {
            id: +id
        }
    })
}
export {
    createProduct, getAllProduct, getProductById, deleteProductById
}