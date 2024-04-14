import { z } from "zod";

export const addProductSchema = z.object({
    title: z.string().min(1, "Title is required").max(30, "Title must be less than 30 characters"),
    description: z.string().min(1, "Description is required").max(100, "Description must be less than 100 characters"),
    price: z.number().min(1, "Price is required").max(9999, "Price must be less than 9999"),
})