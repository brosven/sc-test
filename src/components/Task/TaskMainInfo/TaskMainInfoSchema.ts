import { z } from 'zod';

export const taskMainInfoSchema = z
  .object({
    title: z.string().optional(),
    customer: z.union([z.literal('Сервис - 1'), z.literal('Сервис - 2'), z.literal('Сервис - 3')]).optional(),
    description: z.string().optional(),
    comment: z.string().optional(),
    status: z.union([z.literal('новая'), z.literal('завершенная')]).optional(),
  })
  .strict();
