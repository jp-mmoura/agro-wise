import { z } from 'zod';

export const productSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  preco: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Preço deve ser um número positivo',
  }),
  descricao: z.string().min(10, 'Descrição deve ter no mínimo 10 caracteres'),
  quantidade: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: 'Quantidade deve ser um número não negativo',
  }),
  fornecedor: z.string().min(3, 'Fornecedor deve ter no mínimo 3 caracteres'),
});

export type ProductFormData = z.infer<typeof productSchema>;