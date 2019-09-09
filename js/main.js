import Person from "./modules/DataObject.js";

// IIFE - Immediatley Invoced Function expresion
(() => {
    console.log('fired');

    console.log(Person);

    debugger;
})();