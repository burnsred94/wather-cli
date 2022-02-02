#!/user/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./service/lock-service.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./service/storage.service.js";
import { getWeather } from './service/api.service.js'

const saveToken = async (token) => {
    if(!token.length){
        printError('Не передан токен');
        return
    }
    try{
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
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
    getWeather('moscow')
};

initCLI()