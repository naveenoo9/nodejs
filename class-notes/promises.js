const { error } = require("console");

function myFun(p1, p2) {
    return new Promise(
        (resolve, reject) => {
            var res = p1%p2;
            if(res === 0)
                resolve(`${p1} is divisible by ${p2}`)
            else
                reject(`${p1} is not divisible by ${p2}`)
        }
    )
}

myFun(5,2)
    .then(result => console.info(result))
    .catch(error => console.error(error));