export const removeNode = (tree, nameNode) => {
    const node = findNodeByName(tree, nameNode);
    
    if (!node) return tree;
    
    const parentNode = findParentNode(tree, nameNode);
    parentNode.children = parentNode.children.filter((child) => child.name !== nameNode);
    
    const newTree = JSON.parse(JSON.stringify(tree));
    
    return newTree;
}
  
const findNodeByName = (tree, name) => {
    if (!tree) return null;
    
    if (tree.name === name) return tree;
    
    if (tree.children && tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        const node = findNodeByName(tree.children[i], name);
        if (node) {
          return node;
        }
      }
    }
    
    return null;
}
  
const findParentNode = (tree, name) => {
    if (!tree) return null;
    
    if (tree.children && tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        const child = tree.children[i];
        if (child.name === name) {
          return tree;
        }
        const parentNode = findParentNode(child, name);
        if (parentNode) {
          return parentNode;
        }
      }
    }
    
    return null;
}
