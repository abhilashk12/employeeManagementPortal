import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.type';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {

 recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is for test'),
  new Recipe('A Test Recipe', 'This is for test'),
  new Recipe('A Test Recipe', 'This is for test')

 ];
 imagePath = 'assets/Recipe_logo.jpeg';
  
  ngOnInit() {
    
  }
}
