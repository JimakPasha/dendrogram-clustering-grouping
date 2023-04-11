export const buildTree = (data) => {
  let tree = {};
  const map = {};
  data.forEach((node) => {
    map[node.id] = { ...node, children: [] };
  });
  data.forEach((node) => {
    if (node.parentId) {
      map[node.parentId].children.push(map[node.id]);
    } else {
      tree = map[node.id];
    }
  });
  return tree;
};
