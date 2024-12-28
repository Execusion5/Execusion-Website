import { z } from "zod";

export const ContactFormSchema = z.object({
    name: z.string().min(3, { message: "Name must contain at least 3 character(s)" }).max(25, { message: "Name must contain at most 25 character(s)" }),
    email: z.string().email(),
    phone: z.string().min(4, "Please enter a valid value").optional().or(z.literal('')),
    details: z.string().min(10, { message: "Details must contain at least 10 character(s)" }),
});