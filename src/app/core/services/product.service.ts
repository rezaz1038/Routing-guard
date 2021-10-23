import { Injectable } from "@angular/core";
import { Oil } from "../interface/i-oil";
import { Rice } from "../interface/i-rice";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  public oils: Oil[] = [
    {
      category: 'kitchen',
      description: 'ok ok',
      id: 'o1',
      img: "../../assets/product/o1.jpg",
      name: 'ساعی',
      price: 1500,
      type: 'جامد',
      quality: 'best',
      quantity: 12

    },
    {
      category: 'kitchen',
      description: 'ok',
      id: 'o2',
      img: "../../assets/product/o2.jpg",
      name: 'بهار',
      price: 1000,
      type: 'مایع',
      quality: 'خوب',
      quantity: 12

    },
    {
      category: 'kitchen',
      description: 'ok ok',
      id: 'o1',
      img: "../../assets/product/o3.jpg",
      name: 'سرخ کردنی غنچه',
      price: 1500,
      type: 'جامد',
      quality: 'عالی',
      quantity: 12

    },

  ];
  public rices: Rice[] = [
    {
      category: 'kitchen',
      description: 'ok ok',
      id: 'r1',
      img: "../../assets/product/r1.jpg",
      name: 'هاشمی',
      price: 2500,
      date: '1399',
    },
    {
      category: 'kitchen',
      description: 'ok',
      id: 'r2',
      img: "../../assets/product/r2.jpg",
      name: 'چمپا',
      price: 1020,
      date: '1400'

    },
    {
      category: 'kitchen',
      description: 'ok ok',
      id: 'r3',
      img: "../../assets/product/r3.jpg",
      name: 'عنبر بو ',
      price: 1500,
      date: '1398'

    },

  ]

}
