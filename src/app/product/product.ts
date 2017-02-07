export class Product {
  id: number;
  name: string;
  color: string;
  gender: { id: number; name: string; };
  category: { id: number; name: string; };
  price: number;
  isOnSale: boolean = false;
  salePrice: number = 0;
  currency: string;
  stock: number;
}