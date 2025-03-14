function myFun(p1, p2) {
    var res =  setTimeout(()=> {return p1/p2;}, 2000)
    return res;
}

var res = myFun(10,2)
console.log(res)