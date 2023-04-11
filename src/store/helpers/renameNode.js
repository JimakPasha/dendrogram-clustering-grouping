import { findNodeById } from './findNodeById';

export const renameNode = (tree, nodeId, newName) => {
  const node = findNodeById(tree, nodeId);

  if (!node) return tree;

  node.name = newName;
  const newTree = JSON.parse(JSON.stringify(tree));

  return newTree;
};
