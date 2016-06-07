import {Component, OnInit} from '@angular/core';
import {Area} from '../../classes/area';
import {OrderService} from '../../services/order.service'

@Component({
  moduleId: module.id,
  selector: 'ordering-footer',
  inputs: ['area'],
  template: `
    <ion-toolbar position="bottom">
        <ion-title>Bestellungen: {{getTempOrders().length}} / {{getTempOrdersAmount()}}€</ion-title>
        <ion-buttons end>
            <button outline>
            <ion-icon name="checkmark"></ion-icon> 
            Confirm
            </button>
            <button outline>
            <ion-icon name="close"></ion-icon> 
            Cancel
            </button>
        </ion-buttons>
    </ion-toolbar>`
})
export class OrderingFooterComponent implements OnInit {

  public area: Area;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
  }

  getTempOrders() {
    return this.orderService.getTempOrdersByArea(this.area);
  }
  
  getTempOrdersAmount() {
    return this.orderService.getTempOrdersAmountByArea(this.area);
  }

}
