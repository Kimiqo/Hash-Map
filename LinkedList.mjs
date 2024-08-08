import {Node} from "./Node.mjs";

export default class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value, null);

        if (this.head == null){
            this.head = node;
            this.size++;
            return;
        } else {
            let current = this.head;

            while(current){
                if (current.nextNode == null){
                    current.nextNode = node;
                    this.size++;
                    return;
                }
                current = current.nextNode;
            }
        }
    }

    prepend(value) {
        const node = new Node(value, null);

        if (this.head == null) {
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head(){
        let current = this.head;
        return current;
    }

    get tail() {
        if (!this.head) return null;
        let current = this.head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index){
        let current = this.head;

        if(index > this.size){
            console.log(`The index you're pointing to does not exist!`);
        }else if(index == 0 || index == 1){
            return current;
        } else{
            for (let rounds = 2; rounds <= this.size; rounds++) {
                current = current.nextNode;
                if (index == rounds){
                    return current;
                } 
            }
        }
    }

    pop(){
        if (!this.head) {
            return null; // List is empty
        }

        if (!this.head.nextNode) {
            // Only one element in the list
            const tail = this.head;
            this.head = null;
            this.size--;
            return tail;
        }

        let current = this.head;
        while (current.nextNode && current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const tail = current.nextNode;
        current.nextNode = null;
        this.size--;

        return tail;
    }

    // contains(value){

    //     if(this.head.data == value){
    //         return this.head;
    //     } else if(!(this.head.data == value)){
    //         let current = this.head;
    //         while(current){
    //             if (current.nextNode.data == value){
    //                 return true;
    //             }
    //             current = current.nextNode;
    //         }
    //     } else {
    //         return false;
    //     }

            
    // }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

}


// find(value) returns the index of the node containing value, or null if not found.
// toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
// Extra credit
// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.