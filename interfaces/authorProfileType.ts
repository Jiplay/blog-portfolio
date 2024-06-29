type AuthorProfileType = {
  ID: string
  Name: string
  Job: string
  Banner: string
  Description: string[]
  TabCategory: string[]
  SecondaryCard:{Title:string, Content:string[]}
  WorkData: {Title:string, Text:string, Badge: {Color:string; Text:string}}[]
}

export default AuthorProfileType
