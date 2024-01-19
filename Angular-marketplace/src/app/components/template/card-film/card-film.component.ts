import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../views/checkout/checkout.service';
import { Film } from '../../../views/list-films/film.model';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css'
})
export class CardFilmComponent implements OnInit{
  listFilms : Film[] = [];

  constructor(private checkoutService:CheckoutService){}
  
  ngOnInit(): void{
    this.checkoutService.getListFilms().subscribe((film)=>{
      this.listFilms = film;
      console.log(this.listFilms)
    })  

  }
  SelectFilm(film: Film): void{
    this.checkoutService.setFilm(film)
    this.checkoutService.setPrice(film.price)
  }


}
