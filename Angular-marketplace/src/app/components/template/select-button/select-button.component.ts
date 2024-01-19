import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../views/checkout/checkout.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent implements OnInit {
  disabled = false;

  constructor (private checkoutservice:CheckoutService){

  }

  ngOnInit(): void {
    
  }

  selectFilm(){
    this.disabled = true
    this.checkoutservice.selectFilm()
  }
  unselectFilm(){
    this.disabled = false
    this.checkoutservice.unselectFilm()
  }

}
