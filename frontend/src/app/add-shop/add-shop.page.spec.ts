import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddShopPage } from './add-shop.page';

describe('AddShopPage', () => {
  let component: AddShopPage;
  let fixture: ComponentFixture<AddShopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
