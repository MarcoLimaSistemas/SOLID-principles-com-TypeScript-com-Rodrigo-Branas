import TaxItem from './TaxItem'

export default class Beer extends TaxItem {
  constructor (description: string, price: number) {
    super('Beer', description, price)
    this.description = description
    this.price = price
  }

  getTax (): number {
    return 10
  }
}
