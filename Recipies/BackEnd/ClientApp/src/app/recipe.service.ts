import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe} from './Recipe';

@Injectable()
export class RecipeService {

  private url = "http://localhost:64269/api/recipes/";
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  constructor(private http: HttpClient) { }

  getAllRecipes() {
    return this.http.get(this.url);
  }

  deleteRecipe(id: number) {
   // const urlParams = new HttpParams().set("id", id.toString());
   // return this.http.delete(this.url, { params: urlParams });
  }
}
