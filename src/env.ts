import { z } from 'zod'

const envSchema = z.object({
  // Server
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  JWT_SECRET: z.string(),

  // Database
  // DATABASE_URL: z.string(),

  // URLs
  // API_URL: z.string().url(),
  // WEB_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
