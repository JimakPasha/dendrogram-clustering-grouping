export const addNodeToParent = (tree, parentName, newNode) => {
    const node = findNodeByName(tree, parentName);
    
    if (!node) return tree
    
    const newTree = JSON.parse(JSON.stringify(tree));
    addNodeToParentHelper(newTree, parentName, newNode);
    
    return newTree;
}
  
const addNodeToParentHelper = (tree, parentName, newNode) => {
    const node = findNodeByName(tree, parentName);
    
    if (!node) return;
    
    if (!node.children) {
      node.children = [];
    }
    
    node.children.push({name: newNode});
}
  
const findNodeByName = (tree, name) => {
    if (!tree) return null;
    
    if (tree.name === name) return tree
    
    if (tree.children && tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        const node = findNodeByName(tree.children[i], name);
        if (node) return node;
      }
    }
    
    return null;
}
