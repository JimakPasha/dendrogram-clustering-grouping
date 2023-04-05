import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const data = {
  name: 'Root',
  children: [
    {
      name: 'Child 1',
      children: [
        { name: 'Grandchild 1' },
        { name: 'Grandchild 2' },
        { name: 'Grandchild 3' },
      ],
    },
    {
      name: 'Child 2',
      children: [{ name: 'Grandchild 4' }, { name: 'Grandchild 5' }],
    },
  ],
};

export const App2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };
    const width = 960 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const hierarchyData = d3.hierarchy(data);
    const treeLayout = d3.tree().size([height, width]);
    treeLayout(hierarchyData);

    const link = svg
      .selectAll('.link')
      .data(hierarchyData.descendants().slice(1))
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d) => {
        return `M${d.y},${d.x}C${(d.y + d.parent.y) / 2},${d.x} ${
          (d.y + d.parent.y) / 2
        },${d.parent.x} ${d.parent.y},${d.parent.x}`;
      });

    const node = svg
      .selectAll('.node')
      .data(hierarchyData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y},${d.x})`);

    node.append('circle').attr('r', 5);

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d) => (d.children ? -8 : 8))
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.name);
  }, []);

  return <div ref={svgRef}></div>;
};
