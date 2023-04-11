import { findNodeById } from './findNodeById';

export const removeNode = (tree, id) => {
  const node = findNodeById(tree, id);

  if (!node) return tree;

  const parentNode = findParentNode(tree, id);

  parentNode.children = parentNode.children.filter((child) => child.id !== id);

  const newTree = JSON.parse(JSON.stringify(tree));

  return newTree;
};

const findParentNode = (tree, id) => {
  if (!tree) return null;

  if (tree.children && tree.children.length > 0) {
    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];
      if (child.id === id) {
        return tree;
      }
      const parentNode = findParentNode(child, id);
      if (parentNode) {
        return parentNode;
      }
    }
  }

  return null;
};
