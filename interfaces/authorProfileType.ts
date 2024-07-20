type AuthorProfileType = {
  ID: string
  Name: string
  Job: string
  Banner: string
  Description: string[]
  TabCategory: string[]
  SecondaryCard:{Title:string, Content:string[]}
  WorkData: {Title:string, Text:string, Badge: {Color:string; Text:string}}[]
  ProjectsData : {Title: string, Text: string, Image: string, Redirect: string}[]
  ContactData : {Text: string, Email: string, LinkedIn: string, CV: string}
}

export default AuthorProfileType
