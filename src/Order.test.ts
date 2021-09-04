import Beer from './Beer';
import MessageDataFile from './MessageDataFile';
import Order from './Order';
import Water from './Water';

test('Deve criar um produto e calcular o total', () => {
  // given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const total = order.getTotal();
  // then
  expect(total).toBe(11);
});

test('Deve criar um produto e calcular as taxas', () => {
  // given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const total = order.getTaxes();
  // then
  expect(total).toBe(10);
});

test('Deve criar um produto e imprimir uma mensagem em português', async () => {
  // given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const message = await order.printMessage('pt');
  // then
  expect(message).toBe('O Total foi de R$ 11, os importos foram 10');
});

test('Deve criar um produto e imprimir uma mensagem em inglês', async () => {
  // given
  const order = new Order(new MessageDataFile());
  order.addItem(new Beer('Brahma', 10)); 
  order.addItem(new Water('Crystal', 1));
  // when
  const message = await order.printMessage('en');
  // then
  expect(message).toBe('The Total was R$ 11, the taxes were 10');
});
