import { useEffect, useRef, useState } from 'react';
import { mockTreeData } from './mockTreeData';
import * as d3 from 'd3';

export const ViewDendrogram = () => {
  const [treeData, setTreeData] = useState(mockTreeData);
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

    const hierarchyData = d3.hierarchy(treeData);
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

    node
      .append('circle')
      .attr('r', 5)
      .on('click', (e) => {
        setIsOpenMenu(true);
        setAnchorEl(e.currentTarget);
      });

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d) => (d.children ? -8 : 8))
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.name);
  }, [treeData]);

  const addNode = () => {
    setIsOpenMenu(true);
    // const newNode = {
    //   name: 'New Node',
    //   children: [{ name: 'New Child' }],
    // };

    // setTreeData((prevData) => {
    //   // копируем старый массив и добавляем в него новый узел
    //   const newChildren = [...prevData.children, newNode];
    //   // возвращаем новый объект с обновленным массивом children
    //   return { ...prevData, children: newChildren };
    // });
  };

  const handleCloseModal = () => {};

  return <div ref={svgRef}></div>;
};
