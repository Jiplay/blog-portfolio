
export type Article = {
  Title: string;
  FirstParagraph: string;
  LinkToImageToPromote: string;
  Theme: string;
  Author: string;
  PathOfFile: string;
};

export type UserProfileCV = {
  source: string;
  linkedIn: string;
  instagram: string;
  github: string;
}

export type User = {
  Username: string;
  Email: string;
  Password: string;
};

export type CardData = {
  title: string;
  subtitle: string;
  url: string;
  position: { height: number; width: number };
  colors: { header: string; body: string };
  skills: string;
}
