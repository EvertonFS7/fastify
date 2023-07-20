import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import { env } from './env'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('listen on port 3333')
  })
