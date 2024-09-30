import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.page.html',
  styleUrls: ['./shop-list.page.scss'],
})
export class ShopListPage implements OnInit {

  shops: any = [];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.getAllShops();
  }

  getAllShops(){
    this.shopService.getAll().subscribe(data => {
      console.log("Data has arrived");
      console.log(data);
      this.shops = data;
    });
  }

  deleteShop(id: any){
    this.shopService.delete(id).subscribe(response => {
      this.getAllShops();
    })
  }

}
