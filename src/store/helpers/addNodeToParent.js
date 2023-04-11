import { findNodeById } from './findNodeById';

export const addNodeToParent = (tree, parentId, newNode) => {
  const node = findNodeById(tree, parentId);

  if (!node) return tree;

  const newTree = JSON.parse(JSON.stringify(tree));
  addNodeToParentHelper(newTree, parentId, newNode);

  return newTree;
};

const addNodeToParentHelper = (tree, parentId, newNode) => {
  const node = findNodeById(tree, parentId);

  if (!node) return;

  if (!node.children) {
    node.children = [];
  }

  node.children.push(newNode);
};
