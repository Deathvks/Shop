import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  shops: Array<any> = [
    {
      address: "c/ el rincon",
      telephone: "928915267"
    },

    {
      address: "c/ lujan perez",
      telephone: "928915267"
    },

    {
      address: "c/ juan rejon",
      telephone: "928915267"
    }
  ]

  constructor(private router: Router) { }

  goToShopList(){
    this.router.navigateByUrl("/shop-list");
  }

  goToAddShop(){
    this.router.navigateByUrl("/add-shop");
  }
}
