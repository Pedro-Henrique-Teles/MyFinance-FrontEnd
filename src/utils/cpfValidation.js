import { z } from 'zod';

function cpfValidation(cpf) {
  cpf = cpf.replace(/[^\d]/g, '');
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf.charAt(i)) * (10 - i);
  let digit1 = 11 - (sum % 11);
  if (digit1 > 9) digit1 = 0;
  if (digit1 !== parseInt(cpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf.charAt(i)) * (11 - i);
  let digit2 = 11 - (sum % 11);
  if (digit2 > 9) digit2 = 0;
  return digit2 === parseInt(cpf.charAt(10));
}

export const cpfSchema = z
  .string()
  .nonempty('CPF é obrigatório')
  .refine((value) => cpfValidation(value), {
    message: 'CPF inválido',
  });
