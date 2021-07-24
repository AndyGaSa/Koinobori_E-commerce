import catchPkmn from "../../modules/fetch-api.js";


const pktest = await catchPkmn(151);
console.log(pktest);