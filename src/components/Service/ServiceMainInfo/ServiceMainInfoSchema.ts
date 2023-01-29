import { z } from 'zod';

export const ServiceMainInfoSchema = z
  .object({
    description: z.string().optional(),
    type: z
      .union([z.literal('Публичный'), z.literal('С особыми правами'), z.literal('Со сверх особыми правами')])
      .optional(),
  })
  .strict();
