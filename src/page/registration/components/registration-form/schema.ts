import { z } from "zod";

export const registerFormSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be at most 50 characters long" }),

  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be at most 50 characters long" }),

  email: z
    .string()
    .min(10, { message: "Email must be at least 10 characters long" })
    .max(50, { message: "Email must be at most 50 characters long" })
    .email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(50, { message: "Password must be at most 50 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),

  confirm_password: z
    .string()
    .min(8, {
      message: "Confirmation password must be at least 8 characters long",
    })
    .max(50, {
      message: "Confirmation password must be at most 50 characters long",
    }),
});
//   .refine((data) => data.password === data.confirm_password, {
//     message: "Passwords do not match",
//     path: ["confirm_password"],
//   });
