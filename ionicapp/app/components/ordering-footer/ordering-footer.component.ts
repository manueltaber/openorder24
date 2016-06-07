import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Area} from '../../classes/area';
import {OrderService} from '../../services/order.service'

@Component({
  moduleId: module.id,
  selector: 'ordering-footer',
  template: `
    <ion-toolbar position="bottom">
      <ion-title>Bestellungen: {{getTempOrders().length}} / {{getTempOrdersAmount()}}€</ion-title>
      <ion-buttons end>
        <button outline (click)="onConfirmTempOrders($event)">
          <ion-icon name="checkmark"></ion-icon> 
          Confirm
        </button>
        <button outline (click)="onCancelTempOrders($event)">
          <ion-icon name="close"></ion-icon> 
          Cancel
        </button>
      </ion-buttons>
    </ion-toolbar>`
})
export class OrderingFooterComponent implements OnInit {

  @Input() area: Area;
  @Output() tempOrdersConfirmed = new EventEmitter();
  @Output() tempOrdersCanceled = new EventEmitter();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
  }

  getTempOrders() {
    return this.orderService.getTempOrdersByArea(this.area);
  }
  
  getTempOrdersAmount() {
    return this.orderService.getTempOrdersAmountByArea(this.area);
  }

  onConfirmTempOrders(event) {
    this.orderService.confirmTempOrders();
    this.tempOrdersConfirmed.emit("event");
  }

  onCancelTempOrders(event) {
    this.orderService.cancelTempOrders();
    this.tempOrdersCanceled.emit("event");
  }

}
