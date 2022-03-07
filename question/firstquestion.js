// 1. Promises and Async/Await

//* How promise works it's like making a Promise to something that are not being set stone yet.
// In this case the example is like when you order a food in gojek you can either have food being delivered or not. 
// that's basically the promise. promise is a state of something that is not being set stone yet.

let gojek_food = new Promise((resolve, reject) => {
    let deliver = 1
    if (deliver == 1){
        resolve('Food is delivered');
    }
    else {
        reject('Food is not delivered');
    }
    return;
})

gojek_food.then((message) => {
    console.log("The status are + " + message)
}).catch ((message) => {
    console.log("The status are + " + message)
})

async function waiting_food(){
    const message = await gojek_food("waiting")
}


// for the Async/Await  it will wait for promise to full fill then execute the rest of the code and also making it more synchronously.
