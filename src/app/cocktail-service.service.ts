import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }
 
  getCocktails(): Cocktail[] {
    return [
  {
    name: 'Mojito',
    price: 8,
    image: 'https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/81985_origin-scaled.jpg'
  },
  {
    name: 'Cosmopolitan',
    price: 10,
    image: 'https://uploads-ssl.webflow.com/603e7f3219462c686bd2bb29/6304ddc246312fafc38df2c5_C0117-cosmopolitan.png'
  },
  {
    name: 'Margarita',
    price: 7,
    image: 'https://resize.elle.fr/portrait_480_webp/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/margarita-2037408/9397186-12-fre-FR/Margarita.jpg'
  }
]
  }
}




