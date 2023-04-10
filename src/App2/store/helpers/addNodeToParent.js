import { findNodeByName } from './findNodeByName';

export const addNodeToParent = (tree, parentName, newNode) => {
  const node = findNodeByName(tree, parentName);

  if (!node) return tree;

  const newTree = JSON.parse(JSON.stringify(tree));
  addNodeToParentHelper(newTree, parentName, newNode);

  return newTree;
};

const addNodeToParentHelper = (tree, parentName, newNode) => {
  const node = findNodeByName(tree, parentName);

  if (!node) return;

  if (!node.children) {
    node.children = [];
  }

  node.children.push(newNode);
};
