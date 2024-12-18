class HashTable{
    constructor(size = 50){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        if(typeof key === "number"){
            return key%this.size;
        }else if(typeof key === "string"){
            let hasVal = 0;
            for(let i=0;i<key.length;i++){
                hasVal += key.charCodeAt(i);
            }
            return hasVal % this.size;
        }else{
            throw new Error("Unsupported Key");
        }
    }

    set(value){
        // get the hash value
        let hashVal = this.hash(value);

        if(!this.table[hashVal]){
            this.table[hashVal] = [];
        }

        this.table[hashVal].push(value);
    }

    get(value){
        // get hash value
        // check if bucket is present , if not return error
        // if present than traverse the bucket , if not present return error else return true

        let hashVal = this.hash(value);

        if(!this.table[hashVal]){
            throw new Error ("No such element in the hash table");
        }

        let bucket = this.table[hashVal];

        for(let el of bucket){
            if (el === value){
                return true
            }
        }
        throw new Error("No such element in the hash table");
    }


    remove(value){
        // get the hash value
        // get the bucket
        // traverse the bucket
        // splice the element when matches

        let hashVal = this.hash(value);

        if(!this.table[hashVal]){
            throw new Error("No such element in the hash table");
        }
        let bucket = this.table[hashVal];
        if(!bucket.includes(value)){
            throw new Error("No such element in the hash table");
        }
        let idx = bucket.indexOf(value);
        bucket.splice(idx,1);
    }
    print(){
        console.log(this.table);
    }
}

let hs = new HashTable();
hs.set(121);
hs.set(1);
hs.set(11);
hs.set(10);
hs.set(100);
hs.set(1100);
hs.set("tanmay");
console.log(hs.get(1100));
// console.log(hs.get(555));
console.log(hs.get("tanmay"));
hs.remove("tanmay");
// console.log(hs.get("tanmay"));
hs.print();



