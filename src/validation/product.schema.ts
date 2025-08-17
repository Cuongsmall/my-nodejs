import * as z from "zod";

export const ProductSchema = z.object({
  name: z
    .string({ required_error: "Product name is required" })
    .trim()
    .min(1, { message: "Product name cannot be empty" }),
  price: z.string()
    .transform((val) => (val === "" ? 0 : Number(val)))
    .refine((num) => num > 0, {
      message: "Minimum amount is 1",
    }),
  detailDesc: z
    .string({ required_error: "Detailed description is required" })
    .trim()
    .min(1, { message: "Detailed description cannot be empty" }),
  shortDesc: z
    .string({ required_error: "Short description is required" })
    .trim()
    .min(1, { message: "Short description cannot be empty" }),
  quantity: z.string()
    .transform((val) => (val === "" ? 0 : Number(val)))
    .refine((num) => num > 0, {
      message: "Minimum amount is 1",
    }),

  factory: z
    .string({ required_error: "Factory name is required" })
    .trim()
    .min(1, { message: "Factory name cannot be empty" }),
  target: z
    .string({ required_error: "Target audience is required" })
    .trim()
    .min(1, { message: "Target audience cannot be empty" }),
});

export type TProductSchema = z.infer<typeof ProductSchema>;