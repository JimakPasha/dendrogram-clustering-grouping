export const clusterizeProducts = (products, groupBy, clusterBy) => {
  // создаем объект для группировки и кластеризации
  const clusters = {};

  // проходимся по каждому продукту в массиве
  products.forEach((product) => {
    // получаем значение для группировки и кластеризации
    const groupValue = product[groupBy];
    const clusterValue = product[clusterBy];

    // если объект для группировки еще не создан, создаем его
    if (!clusters[groupValue]) {
      clusters[groupValue] = {};
    }

    // если объект для кластеризации еще не создан, создаем его
    if (!clusters[groupValue][clusterValue]) {
      clusters[groupValue][clusterValue] = [];
    }

    // добавляем продукт в соответствующий кластер
    clusters[groupValue][clusterValue].push(product);
  });

  // возвращаем объект с кластеризованными и группированными данными
  return clusters;
};

const products = [
  {
    id: 1,
    productName: 'Product 1',
    color: 'Red',
    size: 'M',
    weight: 100,
    material: 'Cotton',
    price: 10.99,
    storagePeriod: '6 months',
  },
  {
    id: 2,
    productName: 'Product 2',
    color: 'Blue',
    size: 'S',
    weight: 80,
    material: 'Wool',
    price: 19.99,
    storagePeriod: '12 months',
  },
  {
    id: 3,
    productName: 'Product 3',
    color: 'Green',
    size: 'L',
    weight: 120,
    material: 'Polyester',
    price: 9.99,
    storagePeriod: '6 months',
  },
  {
    id: 4,
    productName: 'Product 4',
    color: 'Red',
    size: 'XS',
    weight: 50,
    material: 'Cotton',
    price: 15.99,
    storagePeriod: '9 months',
  },
  {
    id: 5,
    productName: 'Product 5',
    color: 'Blue',
    size: 'M',
    weight: 90,
    material: 'Wool',
    price: 12.99,
    storagePeriod: '12 months',
  },
  {
    id: 6,
    productName: 'Product 6',
    color: 'Green',
    size: 'XL',
    weight: 150,
    material: 'Polyester',
    price: 8.99,
    storagePeriod: '9 months',
  },
];

console.log(clusterizeProducts(products, 'Red', 'Cotton'));
