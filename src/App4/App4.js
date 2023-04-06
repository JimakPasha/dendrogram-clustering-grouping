import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

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

export const App4 = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const data = products.map((product) => ({
      id: product.id,
      children: [
        // добавляем уровень вложенности
        { label: 'Color', value: product.color },
        { label: 'Size', value: product.size },
        { label: 'Weight', value: product.weight },
        { label: 'Material', value: product.material },
        { label: 'Price', value: product.price },
        { label: 'Storage Period', value: product.storagePeriod },
      ],
    }));

    const hierarchy = d3
      .hierarchy({ children: data })
      .sum((d) => d.children.length);

    const svg = d3.select(svgRef.current);
    const width = svg.attr('width');
    const height = svg.attr('height');

    const tree = d3.cluster().size([height - 50, width - 50]);
    const root = tree(hierarchy);

    const link = svg
      .selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr(
        'd',
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x)
      );

    const node = svg
      .selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y},${d.x})`);

    node.append('circle').attr('r', 5);

    node
      .append('text')
      .attr('dy', '0.31em')
      .attr('x', (d) => (d.children ? -6 : 6))
      .attr('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.id);
  }, [products]);

  return <svg ref={svgRef} width={800} height={600}></svg>;
};
