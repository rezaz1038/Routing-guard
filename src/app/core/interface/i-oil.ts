import { product } from "./i-product";

export  interface Oil extends product{
  quantity:number;
  quality:string;
  type:string;
}
