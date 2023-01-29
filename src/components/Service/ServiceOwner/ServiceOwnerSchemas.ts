import { z } from 'zod';

export const ServiceOwnerSchema = z
  .object({
    name: z.string().optional(),
    lastName: z.string().optional(),
  })
  .strict();
