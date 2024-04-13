import { z } from "zod";
import { memberDetailsSchema } from "./memberDetailsSchema";

export const familySchema = z.object({
    familyArray: z.array(memberDetailsSchema)
})