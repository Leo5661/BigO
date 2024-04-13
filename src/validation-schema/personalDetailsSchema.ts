import { z } from "zod";

export const personalDetailsSchema = z.object({
    firstName: z.string().min(1, "First name is required").max(30, "First name must be less than 30 characters"),
    lastName: z.string().min(1, "Last name is required").max(30, "Last name must be less than 30 characters"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Email is invalid"),
    parentName: z.string().min(1, "Parent name is required").max(50, "Parent name must be less than 50 characters"),
    phoneNumber: z.string().regex(/^\d{10}$/, {message: "Phone number must be exactly 10 digits and contain only numbers",}),
    address: z.string().min(1, "Address is required").max(100, "Address must be less than 100 characters"),
});