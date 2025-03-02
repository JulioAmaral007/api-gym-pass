import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler
} from 'fastify-type-provider-zod'
import { env } from './env'

const app = fastify()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
