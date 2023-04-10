import { findNodeByName } from './findNodeByName';

export const renameNode = (tree, oldName, newName) => {
  const node = findNodeByName(tree, oldName);

  if (!node) return tree;

  node.name = newName;
  const newTree = JSON.parse(JSON.stringify(tree));

  return newTree;
};
