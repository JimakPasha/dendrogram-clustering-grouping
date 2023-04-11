import * as d3 from 'd3';

export function clusterizeData(data) {
  // Создаем иерархические данные
  const hierarchyData = d3.hierarchy({ children: data }, (d) => d.children);

  // Создаем дендрограмму
  const treeLayout = d3.tree().size([500, 500]);
  treeLayout(hierarchyData);

  // Создаем массив узлов и связей
  const nodes = hierarchyData.descendants();
  const links = hierarchyData.links();

  // Группируем данные по цвету и материалу
  const groups = d3.groups(
    data,
    (d) => d.color,
    (d) => d.material
  );

  // Создаем массив кластеров
  const clusters = groups.map(([color, materials], i) => {
    const children = materials.map(([material, products]) => {
      return {
        name: material,
        children: products.map((product) => {
          return { name: product.productName, value: product.price };
        }),
      };
    });
    return { name: color, children };
  });

  // Возвращаем кластеризованные данные и связи
  return { nodes, links, clusters };
}
