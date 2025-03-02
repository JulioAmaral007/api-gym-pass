import type { FastifyInstance } from 'fastify'
import { register } from './controllers/register'

export async function appRoutes(app: FastifyInstance) {
  app.post(
    '/users',
    // {
    //   schema: {
    //     summary: 'Access invite link',
    //     operationId: 'accessInviteLink',
    //     tags: ['referral'],
    //     params: z.object({
    //       subscriberId: z.string(),
    //     }),
    //     response: {
    //       301: z.null(),
    //     },
    //   },
    // },
    register
  )
}
