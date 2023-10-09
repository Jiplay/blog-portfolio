
type Articles = {
  Headlines: string
  ImageURL: string
  Text: string[]
  Themes?: string[]
  Author: string
};

type ImageToDisplay =  {
  Source: string,
  AlternativeText: string,
  Width: number,
  Height: number,
}


export type {Articles, ImageToDisplay} 