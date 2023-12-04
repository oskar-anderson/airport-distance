
import { autoinject, observable } from 'aurelia-framework';


@autoinject
export class ArrayUpdating {

    @observable
    private itemList = [
        `New item - nr ${Math.random() * 80}`,
        `New item - nr ${Math.random() * 80}`
    ];
    
    addItem() {
        this.itemList = [...this.itemList, `New item - nr ${Math.random() * 80}`];
    }

    clearItems() {
        this.itemList = [`New item - nr ${Math.random() * 80}`, `New item - nr ${Math.random() * 80}`]
    }

    itemListChanged(newItemsList: string[], oldItemList: string[]) {
        console.log("itemListChanged", "new: ", newItemsList, ", old: ", oldItemList)
    }
}