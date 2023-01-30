import { z } from 'zod';

export const ServiceMainInfoSchema = z
  .object({
    name: z.union([z.literal('Сервис - 1'), z.literal('Сервис - 2'), z.literal('Сервис - 3')]).optional(),
    description: z.string().optional(),
    type: z
      .union([z.literal('Публичный'), z.literal('С особыми правами'), z.literal('Со сверх особыми правами')])
      .optional(),
    lastUpdate: z.string().optional(),
  })
  .strict();
