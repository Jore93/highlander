import {cvReducer} from "./cvTypes";

export interface paragraphsReducer {
  pastParagraph: string
}

export interface StoreState {
  cv: cvReducer
  paragraphs: paragraphsReducer
}
