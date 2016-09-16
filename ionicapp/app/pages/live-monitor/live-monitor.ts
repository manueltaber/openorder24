import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';

import {Area} from '../../classes/area';
import {Item} from '../../classes/item';
import {Category} from '../../classes/category';
import {Order} from '../../classes/order';

import {BasePage} from '../base';

import {AreaService} from '../../services/area.service';
import {ItemService} from '../../services/item.service';
import {CategoryService} from '../../services/category.service';
import {OrderService} from '../../services/order.service';
import {SettingService} from '../../services/setting.service';
import {TranslationService} from '../../services/translation.service';

const CATEGORY_FILTER_SETTING = 'CATEGORY_FILTER';

@Component({
    templateUrl: 'build/pages/live-monitor/live-monitor.html'
})
export class LiveMonitorPage extends BasePage {

    private liveMonitorItems: LiveMonitorItem[] = [];
    private categoryFilter: number[] = [];

    constructor(protected nav: NavController, 
                protected alertController: AlertController,
                protected areaService: AreaService,
                protected itemService: ItemService,
                protected categoryService: CategoryService,
                protected orderService: OrderService,
                protected settingService: SettingService,
                protected translationService: TranslationService) {
        super(settingService, translationService);
        let orders = this.orderService.getOpenOrders();
        for (let order of orders) {
            let liveMonitorItem = new LiveMonitorItem();
            liveMonitorItem.area = areaService.getAreaByNr(order.area.nr);
            liveMonitorItem.item = itemService.getItemByNr(order.item.nr);
            this.liveMonitorItems.push(liveMonitorItem);
        }
        // a list of category numbers which will be shown
        console.log('hallo');
        try {
            let filter = JSON.parse(this.getPageSetting(CATEGORY_FILTER_SETTING, '[]'));
            console.log(filter);
            for (let categoryNr in filter) {
              console.log(categoryNr);
              this.categoryFilter.push(Number(categoryNr));
            }
        } catch (Error) {

        }
    }

    liveMonitorItemsAvailable(): boolean {
        return this.liveMonitorItems.length > 0;
    }

    itemDone(event, liveMonitorItem: LiveMonitorItem) {
        let index = this.liveMonitorItems.indexOf(liveMonitorItem, 0);
        if (index > -1) {
            this.liveMonitorItems.splice(index, 1)
        }
    }

    private isCategorySelected(category: Category): boolean {
        console.log(category);
        for (let categoryNr of this.categoryFilter) {
            console.log(categoryNr);
            if (category.nr == Number(categoryNr)) {
                return true;
            }
        }
        return false;
    }

    showCategoryFilterAlert(event) {
        let alert = this.alertController.create();
        alert.setTitle('Kategoriefilter');
        for (let category of this.categoryService.getCategories()) {
            alert.addInput({
                type: 'checkbox',
                label: category.desc,
                value: String(category.nr),
                checked: this.isCategorySelected(category)
            });
        }
        alert.addButton(this.getTranslation('CANCEL'));
        alert.addButton({
            text: this.getTranslation('CONFIRM'),
            handler: data => {
                console.log('Checkbox data:', data);

                this.savePageSetting(CATEGORY_FILTER_SETTING, JSON.stringify(data));
            }
        });
        alert.present();
    }
}

class LiveMonitorItem {
    area: Area;
    item: Item;
}

class CategoryList {

    categories: number[] = [];

    public addCategory() {

    }
}