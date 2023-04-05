import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import { Graph as GraphD3 } from 'react-d3-graph';
import { v4 as uuidv4 } from 'uuid';
import * as d3 from 'd3';

export const App3 = () => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [options, setOptions] = useState({
    height: '100%',
    width: '100%',
    d3: {
      linkLength: 200,
    },
  });

  const handleAddNode = () => {
    const newNode = { id: uuidv4(), label: `Node ${nodes.length + 1}` };
    setNodes([...nodes, newNode]);
  };

  const handleAddLink = (source, target, type) => {
    const newLink = { source, target, type };
    setLinks([...links, newLink]);
  };

  const linkTypes = {
    group: {
      label: 'Group Link',
      color: 'blue',
      strokeWidth: 2,
    },
    cluster: {
      label: 'Cluster Link',
      color: 'green',
      strokeWidth: 2,
    },
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <button onClick={handleAddNode}>Add Node</button>
      <button onClick={() => handleAddLink(nodes[0].id, nodes[1].id, 'group')}>
        Add Group Link
      </button>
      <button
        onClick={() => handleAddLink(nodes[0].id, nodes[2].id, 'cluster')}
      >
        Add Cluster Link
      </button>
      <GraphD3
        id="graph-id"
        data={{ nodes, links }}
        config={{
          ...options,
          nodeHighlightBehavior: true,
          node: {
            color: 'lightblue',
            size: 120,
            highlightStrokeColor: 'blue',
          },
          link: {
            highlightColor: 'lightblue',
          },
          linkTypes,
        }}
      />
    </div>
  );
};
