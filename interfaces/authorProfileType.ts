type AuthorProfileType = {
  ID: string
  Name: string
  FavNumber: number
  PictureUrl: string
  Description: string
  RadarData: number[]  // 6 max
  Skills: {Title: string, nb: number}[] // Ideally 6
  Types: {Type: string, Text: string}[] // 2 max
  Trophies: {PictureURL: string, Title: string}[]

}
  // Description: string[]
  // TabCategory: string[]
  // SecondaryCard:{Title:string, Content:string[]}
  // WorkData: {Title:string, Text:string, Badge: {Color:string; Text:string}}[]
  // ProjectsData : {Title: string, Text: string, Image: string, Redirect: string}[]
  // ContactData : {Text: string, Email: string, LinkedIn: string, CV: string}

export default AuthorProfileType
