import { HairColor } from "./Enums";

export interface User {
    name: string; // name?: string; ? means the prop is optional, otherwise it is required
    age: number;
    email: string;
    hairColor: HairColor;
    //getName: (ame: string) => string;
}

export interface AppContextInterface  {
  name: string;
  age: number;
  country: string
}