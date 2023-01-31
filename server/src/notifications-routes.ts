import WebPush from 'web-push'
import z from 'zod'
import { FastifyInstance } from "fastify"

const publicKey = 'BN80XEuCgyF06q4X_9Hz5ygsxwowZ_4NzBc2ta6iMUMKBkah4k86o5STeUc4KbbsAXcNSxwuSWhrG_ujUshn9Rs'
const privateKey = 'Lm-14iukNclWi0FzV3X8ujwK-ZcAWBr-1haeHj6MhfQ'

WebPush.setVapidDetails(
    'http://localhost:3333',
    publicKey,
    privateKey
)

export async function notificationRoutes(app: FastifyInstance) {
    app.get('/push/public_key', () => {
        return {
            publicKey
        }
    })

    app.post('/push/register', (request, reply) => {
        console.log(request.body)

        return reply.status(201).send()
    })

    app.post('/push/send', async (request, reply) => {
        const sendPushBody = z.object({
            subscription: z.object({
                endpoint: z.string(),
                keys: z.object({
                    p256dh: z.string(),
                    auth: z.string()
                })
            })
        })

        const { subscription } = sendPushBody.parse(request.body)

        setTimeout(() => {
            WebPush.sendNotification(subscription, 'HELLO DO BACKEND')
        }, 5000)

        return reply.status(201).send()
    })
}
