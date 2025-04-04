import { z } from "zod";
import { cpfSchema } from "../utils/cpfValidation";

export const createUserSchema = z.object({
    name: z.string().nonempty("O nome não pode estar vazio").min(5, "O nome é muito curto").max(30, "O nome é muito longo"),
    cpf: cpfSchema,
    email: z.string().email("Email invalido").nonempty("O Email não pode estar vazio"),
    password: z.string().min(9, "A senha é muito curta").nonempty("A senha não pode ser vazia"),
    confirmPassword: z.string().min(9, "A senha é muito curta").nonempty("A senha não pode ser vazia"),

})  
.refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ['confirmPassword']
})