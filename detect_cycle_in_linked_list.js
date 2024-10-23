function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

// Creating a linked list with a cycle
const head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
head.next.next.next = head; // Creating a cycle: 3 -> head (1)
console.log(hasCycle(head));  // Output: true