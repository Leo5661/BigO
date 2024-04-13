import { z } from "zod";

export const memberDetailsSchema = z.object({
    memberName: z.string().min(1, "Member name is required").max(30, "Member name must be less than 30 characters"),
    relation: z.string().min(1, "Relation is required").max(30, "Relation must be less than 30 characters"),
});