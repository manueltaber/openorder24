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
        this.refreshLiveMonitorItems();
        this.refreshCategoryFilter();
    }

    private refreshLiveMonitorItems() {
        this.liveMonitorItems = [];
        let orders = this.orderService.getOpenOrders();
        for (let order of orders) {
            let liveMonitorItem = new LiveMonitorItem();
            liveMonitorItem.area = this.areaService.getAreaByNr(order.area.nr);
            liveMonitorItem.item = this.itemService.getItemByNr(order.item.nr);
            this.liveMonitorItems.push(liveMonitorItem);
        }
    }

    private refreshCategoryFilter() {
        try {
            this.categoryFilter = [];
            let filter = JSON.parse(this.getPageSetting(CATEGORY_FILTER_SETTING, []));
            for (let categoryNr of filter) {
                this.categoryFilter.push(Number(categoryNr));
            }
        } catch (Error) {
            this.categoryFilter = [];
            console.log(Error);
        }
    }

    private getLiveMonitorItems(): LiveMonitorItem[] {
        let tempItems: LiveMonitorItem[] = [];
        for (let tempItem of this.liveMonitorItems) {
            if (this.isCategorySelected(tempItem.item.category)) {
                tempItems.push(tempItem);
            }
        }
        return tempItems;
    }

    private liveMonitorItemsAvailable(): boolean {
        return this.getLiveMonitorItems().length > 0;
    }

    itemDone(event, liveMonitorItem: LiveMonitorItem) {
        let index = this.liveMonitorItems.indexOf(liveMonitorItem, 0);
        if (index > -1) {
            this.liveMonitorItems.splice(index, 1)
        }
    }

    private isCategorySelected(category: Category): boolean {
        for (let categoryNr of this.categoryFilter) {
            if (category.nr == Number(categoryNr)) {
                return true;
            }
        }
        return false;
    }

    showCategoryFilterAlert(event) {
        let alert = this.alertController.create();
        alert.setTitle(this.getTranslation('CATEGORY_FILTER'));
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
                this.savePageSetting(CATEGORY_FILTER_SETTING, JSON.stringify(data));
                this.refreshCategoryFilter();
            }
        });
        alert.present();
    }
}

class LiveMonitorItem {
    area: Area;
    item: Item;
}
