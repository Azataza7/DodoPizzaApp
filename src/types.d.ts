export interface ApiFoodItems {
  id: string;
  image: string;
  price: string;
  title: string;
}

export type FoodItem = Omit<ApiFoodItems, 'id'>

export interface FoodItemsJson {
  [id: string]: ApiFoodItems
}

export interface FoodItemsResponse {
  data: FoodItemsJson[FoodItemsJson];
}