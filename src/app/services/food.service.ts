import { Injectable } from '@angular/core';
import {Food} from '../shared/models/Food';
import {sample_foods, sample_tags} from 'src/data';
import { Tags } from '../shared/models/Tags';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() : Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm : string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags():Tags[]{
    return sample_tags;
  }

  getAllFoodByTags(tag:string){
    return tag == "All"?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));

  }

  getFoodById(foodId:string):Food{
      return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
