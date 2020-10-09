export interface Education {
  uuid: string;
  name: string;
  place: string;
  duration: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Language {
  uuid: string;
  language: string;
  level: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Paragraph {
  uuid: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Position {
  uuid: string;
  position: string;
  duration: string;
  organisation: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  uuid: string;
  username: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface Workhistory {
  uuid: string;
  position: string;
  employer: string;
  duration: string;
  createdAt: Date;
  updatedAt: Date;
}
