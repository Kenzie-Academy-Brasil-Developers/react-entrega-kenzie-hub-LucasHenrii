import { z } from "zod";

export const Zod = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O email é obrigatório")
      .email("Forneça um email válido"),
    password: z
      .string()
      .min(8, "Senha deve conter pelo menos 8 caracteres")
      .regex(/(?=.*['A-Z'])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/[^a-zA-Z 0-9]+/g, "É necessário pelo menos um simbolo"),
    confirm: z.string().min(1, "Confirmar senha é obrigatório"),
    bio: z.string().nonempty("Obrigatório"),
    contact: z.string().nonempty("Obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "A confirmação e a senha precisam corresponder",
    path: ["confirm"],
  });

export const ZodLogin = z.object({
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Forneça um email válido"),
  password: z.string().nonempty("Senha é obrigatória"),
});
