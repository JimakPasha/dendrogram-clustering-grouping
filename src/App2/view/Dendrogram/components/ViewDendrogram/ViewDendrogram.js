import { useEffect, useRef } from 'react';
import { setNodeInfo } from '../../../../store/modalMenuSlice';
import { useDispatch, useSelector } from 'react-redux';

import * as d3 from 'd3';

export const ViewDendrogram = () => {
  const disaptch = useDispatch();
  const svgRef = useRef();
  const {tree} = useSelector((state) => state.tree);

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

    const hierarchyData = d3.hierarchy(tree);
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
      .attr('transform', (d) => `translate(${d.y},${d.x})`)
      .on('click', (e) => {
        // TODO класть в значение ноды в например value и доставть тут из value, а не таким образом. Подсказка: `.attr('d', (d) => {` где в d инфа вся о ноде.
        disaptch(setNodeInfo({anchorMenuEl: e.currentTarget, nodeName: e.target.__data__.data.name}));
      });

    node
      .append('circle')
      .attr('r', 5);

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d) => (d.children ? -8 : 8))
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.name)
  }, [tree, disaptch]);

  const addNode = () => {
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

  return <div ref={svgRef}></div>;
};
