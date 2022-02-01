#!/user/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./service/lock-service.js"
import { saveKeyValue } from "./service/storage.service.js";

const saveToken = async (token) => {
    try{
        await saveKeyValue('token', token)
        printSuccess('Токен сохранен')
    }catch (err){
        printError(err.message)
    }
}

const initCLI = () =>{
    const args = getArgs(process.argv)
    console.log(args)
    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.t){
        return saveToken(args.t)
    }
};

initCLI()