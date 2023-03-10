class SLLNode {
    constructor(value) { 
        this.value = value; 
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    // ADD FRONT
    addFront(value) {
        var createdNode = new SLLNode(value); 
        createdNode.next = this.head;
        this.head = createdNode;
        return this.head;
    }

    //REMOVE FRONT
    removeFront(){
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    //FRONT
    front() {
        if (this.head == null) {
            return this.head;
        }
        return this.head.value;
    }
}

var fancySLL = new SLL();

console.log("Front value with no list:", fancySLL);
fancySLL.addFront(18);
console.log("Front value with list:", fancySLL);
fancySLL.addFront(5);
fancySLL.addFront(73);
console.log("Original SLL:", fancySLL);
//OUTPUT: SLL { head: SLLNode { value: 73, next: SLLNode { value: 5, next: [SLLNode] } } }

fancySLL.removeFront();
console.log("Removed Front SLL:", fancySLL);