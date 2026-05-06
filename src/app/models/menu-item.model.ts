export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Beverages';
  image: string;
  isVeg: boolean;
  isPopular?: boolean;
}
