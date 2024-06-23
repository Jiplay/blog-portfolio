type AuthorProfileType = {
  Name: string
  Job: string
  Banner: string
  Description: string[]
  TabCategory: string[]
  WorkData: {Title:string, Text:string, Badge: {Color:string; Text:string}}[]
}

export default AuthorProfileType
