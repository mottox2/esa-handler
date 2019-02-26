import {
  APIGatewayProxyEvent,
  APIGatewayProxyCallback
  // @ts-ignore
} from '@types/aws-lambda'
import handleNetlifyTechniques from './handlers/netlify-techniques'

interface EsaWebhook {
  post: EsaPost
  user: EsaUser
  team: {
    name: string
  }
}

exports.handler = async (
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) => {
  if (event.httpMethod !== 'POST') {
    return
  }

  const body : EsaWebhook = JSON.parse(event.body)

  const {post, user, team} = body
  if (team.name !== 'mottox2') {
    return
  }

  if ((post.name as string).includes('/NetlifyTechniques')) {
    handleNetlifyTechniques(post)
  }

  return callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{}'
  })
}
