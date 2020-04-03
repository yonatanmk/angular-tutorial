import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test Desc', 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
