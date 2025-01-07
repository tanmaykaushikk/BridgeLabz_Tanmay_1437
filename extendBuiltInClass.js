class CustomArray extends Array{
    first(){
        return this[0];
    }
}

const arr = new CustomArray(1,2,3);
arr.first();