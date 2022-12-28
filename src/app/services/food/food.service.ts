import { Foods } from './../../shared/models/food';
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:string){
    return this.getAll().find(food => food.id == id) ?? new Foods();
  }
  getAllFoodsByTag(tag: string): Foods[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      {name:'All', count:14},
      {name:'FastFood', count:4},
      {name:'Pizza', count:2},
      {name:'Lunch', count:3},
      {name:'SlowFood', count:2},
      {name:'Hamburger', count:1},
      {name:'Fry', count:1},
      {name:'Soup', count:1},
    ]
  }

  getAll(): Foods[] {
    return [

      {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 100,
        favourite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: '2',
        name: 'Meatball',
        price: 200,
        cookTime: '20-30',
        favourite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: '3',
        name: 'Hamburger',
        price: 95,
        cookTime: '10-15',
        favourite: false,
        origins: ['germany', 'us'],
        star: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: '4',
        name: 'Fried Potatoes',
        price: 75,
        cookTime: '15-20',
        favourite: true,
        origins: ['belgium', 'france'],
        star: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: '5',
        name: 'Chicken Soup',
        price: 119,
        cookTime: '40-50',
        favourite: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: '6',
        name: 'Vegetables Pizza',
        price: 99,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: '7',
        name: 'Spicy Cheese Burger',
        price: 129,
        cookTime: '20-30',
        favourite: false,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: 'assets/food-7.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: '8',
        name: 'Vegetables Magento Pizza',
        price: 99,
        cookTime: '45-50',
        favourite: false,
        origins: ['indian'],
        star: 4.0,
        imageUrl: 'assets/food-8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },

    ]
  }
}
