export const findNodeByName = (tree, name) => {
  //   if (!tree || typeof tree !== 'object') return null;
  if (!tree) return null;

  if (tree.name === name) return tree;

  if (tree.children && tree.children.length > 0) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = findNodeByName(tree.children[i], name);
      if (node) return node;
    }
  }

  return null;
};
