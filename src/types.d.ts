export interface ApiFoodItems {
  id: string;
  title: string;
  price: string;
  image: string;
}

export type FoodItem = Omit<ApiFoodItems, 'id'>


export interface FoodItemsJson {
  [id: string]: ApiFoodItems
}