// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

( () => {
    console.log(`DB connected two`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})(`vedant`)