import Octokit from '@octokit/rest'

const handler = async (post: EsaPost) => {
  const octokit = new Octokit()
  octokit.authenticate({
    type: 'oauth',
    token: process.env.GITHUB_TOKEN,
  })


  const content = (new Buffer(post.body_md)).toString('base64')

  const res = await octokit.repos.createFile({
    owner: 'mottox2',
    repo: 'netlify-techniques',
    path: `/articles/${post.full_name.replace(/^NetlifyTecniques/, '')}`,
    message: 'Commit from mottox2/esa-handler',
    content,
  })

  console.log(res)
}

export default handler
