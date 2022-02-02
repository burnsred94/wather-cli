import https from 'https'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWeather = async (city) =>{
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if(!token){
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]')
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    url.searchParams.append('q', city)
    url.searchParams.append('app', token)
    url.searchParams.append('lang', 'ru')
    url.searchParams.append('units', 'metrics')

    https.get(url, (res) =>{
        let result = ''
        res.on('data',(chunk) =>{
            result += chunk
        });
        res.on('end', ()=>{
            console.log(result)
        });

    })
};

export { getWeather }