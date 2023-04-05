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
