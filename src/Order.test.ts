import Beer from './Beer';
import Order from './Order';
import Water from './Water';

test('Deve criar um produto e calcular o total', () => {
  // given
  const order = new Order();
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const total = order.getTotal();
  // then
  expect(total).toBe(11);
});

test('Deve criar um produto e calcular as taxas', () => {
  // given
  const order = new Order();
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const total = order.getTotal();
  // then
  expect(total).toBe(11);
});
