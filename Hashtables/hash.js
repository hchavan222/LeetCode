class Hash{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let add = this._hash(key);
        if(!this.data[add]){
            this.data[add] = [];
        }
        this.data[add].push([key, value]);
        console.log(this.data);

    }

    get(key){
        let add = this._hash(key);
        const curr = this.data[add];
        if(curr){
            for(let i = 0; i < curr.length; i++){
                if(curr[i][0] === key){
                    return curr[i][1];
                }
            }
        }
    }
}

const myHash = new Hash(2);
myHash.set('grapes', 10000);
myHash.set('grapesss', 20000);
myHash.set('apples', 54);
console.log(myHash.get('grapes'));
console.log(myHash.get('grapesss'));