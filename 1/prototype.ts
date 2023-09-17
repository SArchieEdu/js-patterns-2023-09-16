interface Node {

}

interface Prototype {
    clone(): Node
}

class StorageNode implements Node, Prototype {
    clone(): Node {
        return {

        }
    }
}

const node = new StorageNode();
const node2 = node.clone();