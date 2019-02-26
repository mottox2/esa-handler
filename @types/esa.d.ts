interface RelatedUser {
  name: string
  screen_name: string
  icon: string
}

interface EsaPost {
  number: number
  name: string
  tags: Array<string>
  category: string
  full_name: string
  wip: boolean
  body_md: string
  body_html: string
  created_at: string
  updated_at: string
  message: string
  url: string
  revision_number: number
  created_by: RelatedUser
  updated_by: RelatedUser
  kind: 'stock' | 'flow'
  comments_count: number
  tasks_count: number
  done_tasks_count: number
  stargazers_count: number
  watchers_count: number
  star: boolean
  watch: boolean
}

interface EsaUser {
  id: number
  name: string
  screen_name: string
  created_at: string
  updated_at: string
  icon: string
  email: string
}