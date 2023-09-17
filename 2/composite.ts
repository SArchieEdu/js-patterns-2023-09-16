export interface Node {
  paint();
}

function paintGraph(rootNode: Node) {
  rootNode.paint();
}

class SingleNode implements Node {
  paint() {
    //...
  }
}

class ContainerNode implements Node {
  children: Node[] = [];

  paint() {
    this.children.forEach((node) => node.paint());
    // ...
  }

  addChild(node: Node) {
    this.children.push(node);
  }
}

const node = new SingleNode();
const node1 = new SingleNode();
const node2 = new SingleNode();
const node3 = new SingleNode();
const node4 = new SingleNode();

const nodeContainer = new ContainerNode();
const nodeContainer1 = new ContainerNode();
const nodeContainer2 = new ContainerNode();
const nodeContainer3 = new ContainerNode();

nodeContainer.addChild(nodeContainer1);
nodeContainer.addChild(nodeContainer2);
nodeContainer1.addChild(node);
nodeContainer1.addChild(node1);
nodeContainer1.addChild(node2);
nodeContainer2.addChild(node3);
nodeContainer2.addChild(node4);
nodeContainer2.addChild(nodeContainer3);

paintGraph(nodeContainer);
