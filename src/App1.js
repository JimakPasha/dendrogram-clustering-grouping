import { useEffect, useRef, useState } from 'react';
import { products } from './mock/products';
import { clusterizeProducts } from './helpers/clusterizeProducts';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';

export const App1 = () => {
  const [nodes, setNodes] = useState([]);
  const svgRef = useRef();

  const width = 300;
  const height = 300;

  useEffect(() => {
    const data = clusterizeProducts(products);
    const svg = d3.select(svgRef.current);

    const cluster = d3.cluster().size([height, width - 100]);

    const root = d3.hierarchy(data);
    cluster(root);

    const links = root.links();
    const linkPath = d3
      .linkHorizontal()
      .x((d) => d.y)
      .y((d) => d.x);

    svg
      .selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', linkPath);

    const nodes = root.descendants();
    svg
      .selectAll('.node')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('cx', (d) => d.y)
      .attr('cy', (d) => d.x)
      .attr('r', 5);

    svg
      .selectAll('.label')
      .data(nodes)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', (d) => d.y + 10)
      .attr('y', (d) => d.x + 5)
      .text((d) => d.data.name);
  }, []);

  const handleAddNode = () => {
    const newNode = { id: uuidv4(), label: `Node ${nodes.length + 1}` };
    setNodes([...nodes, newNode]);
  };

  return (
    <div>
      <button onClick={handleAddNode}>Add Node</button>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
};
