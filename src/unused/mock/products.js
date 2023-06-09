export const products = [
  {
    id: 1,
    productName: 'T-Shirt',
    color: 'white',
    size: 'S',
    weight: '150 g',
    material: 'Cotton',
    price: 500,
    storagePeriod: '12 months',
  },
  {
    id: 2,
    productName: 'Jeans',
    color: 'blue',
    size: 'M',
    weight: '400 g',
    material: 'Denim',
    price: 1500,
    storagePeriod: '24 months',
  },
  {
    id: 3,
    productName: 'Sweater',
    color: 'black',
    size: 'L',
    weight: '300 g',
    material: 'Wool',
    price: 1000,
    storagePeriod: '18 months',
  },
  {
    id: 4,
    productName: 'Shorts',
    color: 'red',
    size: 'XL',
    weight: '200 g',
    material: 'Cotton',
    price: 800,
    storagePeriod: '9 months',
  },
  {
    id: 5,
    productName: 'Dress',
    color: 'green',
    size: 'S',
    weight: '350 g',
    material: 'Silk',
    price: 2500,
    storagePeriod: '36 months',
  },
  {
    id: 6,
    productName: 'Skirt',
    color: 'brown',
    size: 'M',
    weight: '250 g',
    material: 'Cotton',
    price: 1200,
    storagePeriod: '12 months',
  },
  {
    id: 7,
    productName: 'Socks',
    color: 'red',
    size: 'S',
    weight: '30 g',
    material: 'Cotton',
    price: 100,
    storagePeriod: '24 months',
  },
  {
    id: 8,
    productName: 'Skirt',
    color: 'brown',
    size: 'S',
    weight: '270 g',
    material: 'Silk',
    price: 1000,
    storagePeriod: '12 months',
  },
  {
    id: 9,
    productName: 'Skirt',
    color: 'brown',
    size: 'M',
    weight: '150 g',
    material: 'Cotton',
    price: 1900,
    storagePeriod: '12 months',
  },
  {
    id: 10,
    productName: 'Dress',
    color: 'red',
    size: 'M',
    weight: '300 g',
    material: 'Silk',
    price: 1400,
    storagePeriod: '12 months',
  },
  {
    id: 11,
    productName: 'Skirt',
    color: 'brown',
    size: 'XLL',
    weight: '340 g',
    material: 'Cotton',
    price: 1100,
    storagePeriod: '12 months',
  },
  {
    id: 12,
    productName: 'Dress',
    color: 'brown',
    size: 'S',
    weight: '340 g',
    material: 'Cotton',
    price: 700,
    storagePeriod: '12 months',
  },
  {
    id: 13,
    productName: 'Dress',
    color: 'red',
    size: 'XLL',
    weight: '120 g',
    material: 'Cotton',
    price: 800,
    storagePeriod: '12 months',
  },
];

function clusterProducts(products, clusterBy) {
  let clusters = {};
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let clusterValue = product[clusterBy];
    if (clusters[clusterValue]) {
      clusters[clusterValue].push(product);
    } else {
      clusters[clusterValue] = [product];
    }
  }
  return clusters;
}

let clusters = clusterProducts(products, 'color');
console.log(clusters);
