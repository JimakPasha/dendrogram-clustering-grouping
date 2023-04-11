import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTreeEventLog } from '../../../../store/eventLogSlice';
import * as d3 from 'd3';

export const DendrogramEventLog = () => {
  const dispatch = useDispatch();
  const svgRef = useRef();
  const { tree } = useSelector(selectTreeEventLog);

  useEffect(() => {
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };
    const width = 1800 - margin.left - margin.right;
    const height = 5000 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .select('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .select('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    svg.selectAll('*').remove();

    const hierarchyData = d3.hierarchy(tree);
    const treeLayout = d3.tree().size([height, width]);
    treeLayout(hierarchyData);

    const node = svg
      .selectAll('.node-el')
      .data(hierarchyData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node-el')
      .attr('transform', (d) => `translate(${d.y},${d.x})`);

    node.append('circle').attr('r', 5);

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', (d) => (d.children ? -8 : 8))
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.name);

    const link = svg
      .selectAll('.link')
      .data(hierarchyData.links())
      .enter()
      .append('path')
      .attr('class', 'link link_node')
      .attr(
        'd',
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x)
      );
  }, [tree, dispatch]);

  return (
    <div ref={svgRef}>
      <svg>
        <g></g>
      </svg>
    </div>
  );
};
