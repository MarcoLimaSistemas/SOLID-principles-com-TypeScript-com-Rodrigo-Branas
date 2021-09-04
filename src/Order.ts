import Item from "./Item";
import TaxItem from "./TaxItem";

export default class Order {
    items: Item[];

    constructor() {
        this.items = []
    }

    addItem(item: Item) {
        this.items.push(item);
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }

        return total;
    }

    getTaxes() {
        let taxes = 0
        for (const item of this.items) {
            if (item instanceof TaxItem)
                taxes += item.getTax();
        }

        return taxes;
    }
}