import z from 'zod';

export const ZodCreateSchema = z
  .object({
    name: z.string().min(6),
  })
  .required();

export type ZodCreateType = z.infer<typeof ZodCreateSchema>;
