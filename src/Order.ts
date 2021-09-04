import Item from "./Item";
import MessageData from "./MessageData";
import TaxItem from "./TaxItem";

export default class Order {

    items: Item[];
    messageData: MessageData;

    constructor(messageDate: MessageData) {
        this.items = []
        this.messageData = messageDate;
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

    async printMessage(language: string) {
        const message = await this.messageData.read(language);
        return message
        .replace('{total}', this.getTotal().toString())
        .replace('{taxes}', this.getTaxes().toString())
    }
}