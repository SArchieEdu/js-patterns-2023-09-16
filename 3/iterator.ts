class TreeIterator {
  getNext() {}

  hasMore() {}
}

class TreeCollection {
  iterator: TreeIterator;

  getNext() {
    return this.iterator.getNext();
  }
}
