function getIthItemInLinkedList(head, i) {
  if (i < 0) {
    throw new Error("i can't be negative: " + i);
  }

  let currentPosition = 0;
  let currentNode = head;

  while (currentNode) {
    if (currentPosition === i) {
      // found the item!
      return currentNode;
    }

    // move on to the next node
    currentNode = currentNode.next;
    currentPosition++;
  }

  throw new Error("List has fewer than i + 1 (" + (i + 1) + ") nodes");
}
