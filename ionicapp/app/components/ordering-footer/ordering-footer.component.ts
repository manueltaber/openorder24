import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Area} from '../../classes/area';
import {OrderService} from '../../services/order.service'
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'ordering-footer',
  template: `
    <ion-toolbar position="bottom">
      <ion-title (click)="onShowTempOrdersOverview($event)">
        {{translationService.getTranslation('ORDERS')}}: 
        {{getTempOrders().length}} / {{getTempOrdersAmount()}}€
      </ion-title>
      <ion-buttons end>
        <button outline [disabled]="getTempOrders().length<=0" (click)="onConfirmTempOrders($event)">
          <ion-icon name="checkmark"></ion-icon> 
          {{translationService.getTranslation('CONFIRM')}}
        </button>
        <button outline (click)="onCancelTempOrders($event)">
          <ion-icon name="close"></ion-icon> 
          {{translationService.getTranslation('CANCEL')}}
        </button>
      </ion-buttons>
    </ion-toolbar>`
})
export class OrderingFooterComponent implements OnInit {

  @Input() area: Area;
  @Output() showTempOrdersOverview = new EventEmitter();
  @Output() tempOrdersConfirmed = new EventEmitter();
  @Output() tempOrdersCanceled = new EventEmitter();

  constructor(private orderService: OrderService,
              private translationService: TranslationService) {}

  ngOnInit() {
  }

  getTempOrders() {
    return this.orderService.getTempOrdersByArea(this.area);
  }
  
  getTempOrdersAmount() {
    return this.orderService.getTempOrdersAmountByArea(this.area);
  }

  onShowTempOrdersOverview(event) {
    if (this.getTempOrders().length > 0) {
      this.showTempOrdersOverview.emit("event");
    }
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
