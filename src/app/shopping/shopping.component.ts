import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  shoppingCosts;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shoppingCosts = this.cartService.getShoppingPrices();
  }

}
