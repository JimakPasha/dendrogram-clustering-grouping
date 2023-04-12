export const findNodeById = (tree, id) => {
  if (!tree) return null;

  if (tree.id === id) return tree;

  if (tree.children && tree.children.length > 0) {
    for (let i = 0; i < tree.children.length; i++) {
      const node = findNodeById(tree.children[i], id);
      if (node) return node;
    }
  }

  return null;
};
