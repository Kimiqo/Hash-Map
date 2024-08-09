import LinkedList from "./LinkedList.mjs";

class hashMap{
    constructor(bucket = new Array(), capacity = 16, loadFactor = 0.75){
        this.bucket = bucket;
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    set(key, value) {
        let hashed = hash(key);
        let bucketIndex = hashed % this.capacity;

        if (this.bucket[bucketIndex] === undefined) {
            // First item in this bucket
            this.bucket[bucketIndex] = { key, value };
            this.size++;
        } else if (this.bucket[bucketIndex] instanceof LinkedList) {
            // LinkedList already exists, update or append
            const existingNode = this.bucket[bucketIndex].find(item => item.key === key);
            if (existingNode) {
                existingNode.value = value;
            } else {
                this.bucket[bucketIndex].append({ key, value });
                this.size++;
            }
        } else {
            // Single item exists, check if it's the same key
            if (this.bucket[bucketIndex].key === key) {
                this.bucket[bucketIndex].value = value;
            } else {
                // Convert to LinkedList
                const existingItem = this.bucket[bucketIndex];
                const list = new LinkedList();
                list.append(existingItem);
                list.append({ key, value });
                this.bucket[bucketIndex] = list;
                this.size++;
            }
        }

        // // Check if resizing is needed
        // if (this.size / this.capacity > this.loadFactor) {
        //     this.resize();
        // }

        return this;
    }

    get(key) {
        const index = hash(key) % this.capacity;
        const bucketItem = this.bucket[index];

        if (!bucketItem) {
            return `Does not exist`;
        }

        //if bucket has a linkedlist
        if (bucketItem instanceof LinkedList) {
            const node = bucketItem.find(item => item.key === key);
            return node ? node.value : `Does not exist`;
        }

        return bucketItem.key === key ? bucketItem.value : `Does not exist`;
    }

    has(key){
        const index = hash(key) % this.capacity;
        const bucketItem = this.bucket[index];

        if (!bucketItem) {
            return `Does not exist`;
        }

        //if bucket has a linkedlist
        if (bucketItem instanceof LinkedList) {
            const node = bucketItem.find(item => item.key === key);
            return node ? `True: exists` : `False: DNE`;
        }

        return bucketItem.key === key ? true : false;
    }

    remove(key){
        if (!(this.has(key))){
            return `Does not exist`;
        } else {
            return `Write remove-me code`;
        }
    }

    length(){
        return `Size of HashMap: ${this.size}`;
    }

    clear(){
        this.bucket = new Array();
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;

        return `Cleared the hashMap: ${this.bucket}`;
    }

    keys() { //returns an array containing all the keys inside the hash map.
        const keyArray = [];

        if (this.size === 0) {
            return `HashMap is empty`;
        }

        this.bucket.forEach(element => {
            if (element instanceof LinkedList) {
                // If it's a LinkedList, iterate through its nodes
                let current = element.head;
                while (current) {
                    // Check if current.value exists before accessing its key
                    if (current.value && current.value.key !== undefined) {
                        keyArray.push(current.value.key);
                    } else if (current.key !== undefined) {
                        // If the key is directly on the current node
                        keyArray.push(current.key);
                    }
                    current = current.next;
                }
            } else if (element && element.key !== undefined) {
                // If it's a single key-value pair
                keyArray.push(element.key);
            }
        });

        return keyArray;
    }

    values() { //returns an array containing all the values inside the hash map.
        const valueArray = [];

        if (this.size === 0) {
            return `HashMap is empty`;
        }

        this.bucket.forEach(element => {
            if (element instanceof LinkedList) {
                // If it's a LinkedList, iterate through its nodes
                let current = element.head;
                while (current) {
                    // Check if current.value exists before accessing its value
                    if (current.value && current.value.value !== undefined) {
                        valueArray.push(current.value.value);
                    } else if (current.value !== undefined) {
                        // If the value is directly on the current node
                        valueArray.push(current.value);
                    }
                    current = current.next;
                }
            } else if (element && element.value !== undefined) {
                // If it's a single key-value pair
                valueArray.push(element.value);
            }
        });

        return valueArray;
    }

    entries() { // returns an array that contains each key, value pair
        const entryArray = [];
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i]) {
                if (this.bucket[i] instanceof LinkedList) {
                    // Handle LinkedList entries
                        //create an array to hold index-wise linked-lists
                    let indexArray = [];
                    let current = this.bucket[i].head;
                    while (current) {
                        indexArray.push([current.data.key, current.data.value]);
                        current = current.nextNode;
                    }
                    //put the array of array in its place
                    entryArray[i] = indexArray;
                } else {
                    // Handle regular entries
                    entryArray.push([this.bucket[i].key, this.bucket[i].value]);
                }
            }
        }
        return entryArray;
    }
}

function hash(key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    
    return hashCode;
} 

export default hashMap;