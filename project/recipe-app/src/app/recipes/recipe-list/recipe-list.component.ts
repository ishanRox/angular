import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simple a test', 'https://www.w3schools.com/html/img_chania.jpg')
    ,
    new Recipe('A test recipe2222', 'this is simple a test', 'https://www.w3schools.com/html/img_girl.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
