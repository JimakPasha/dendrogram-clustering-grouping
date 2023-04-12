import * as d3 from 'd3';

export function clusterizeData(data) {
  const hierarchyData = d3.hierarchy({ children: data }, (d) => d.children);

  const treeLayout = d3.tree().size([500, 500]);
  treeLayout(hierarchyData);

  const nodes = hierarchyData.descendants();
  const links = hierarchyData.links();

  const groups = d3.groups(
    data,
    (d) => d.color,
    (d) => d.material
  );

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

  return { nodes, links, clusters };
}
