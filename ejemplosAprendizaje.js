// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
const promise = new Promise((resolve,reject)=>{
    const success = true
    if (success) {
        resolve("successful operation!")
    }
    else {
        reject("failed")
    }
});

promise.then(result => {
    console.log("resultado:",result);
}).catch(error =>{
    console.log("error:",error);
}).finally(() =>{
    //It is used to clean up or to execute functions regardless of the result of the promise, for example, stopping a loading
    console("la promesa ha tenido respuesta y ha finalizado")
})





