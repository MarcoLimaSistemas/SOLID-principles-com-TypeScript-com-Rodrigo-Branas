import Item from './Item'

export default class Beer extends Item {
  constructor (description: string, price: number) {
    super('Beer', description, price)
    this.description = description
    this.price = price
  }

  getTax (): number {
    return 10
  }
}
