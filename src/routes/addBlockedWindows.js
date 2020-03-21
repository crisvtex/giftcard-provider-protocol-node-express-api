import uuidv4 from 'uuid/v4';
import { Router } from 'express';

import vtexAppKeyAppToken from '../constants/vtex-appkey-apptoken'
import accountName from '../constants/accountName'

const fetch = require('node-fetch')

const router = Router();

const appKey = vtexAppKeyAppToken.appKey
const appToken = vtexAppKeyAppToken.appToken

const fetchApi = async (url, options, next) => { 
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log('Response Success', data)
        return data    
        next()
    } catch (error) {
        console.log('Response Error', error)
        next()
    }
    
}

/*  API Endpoint: GET Get All BlockedWindows */
router.get('/', (req, res) => {
    //return res.send(Object.values(req.context.models.BlockedWindowss)); 
});


/*  API Endpoint: POST Add BlockedWindow to carriedId */
/* MIRAR https://www.kevinleary.net/syntax-error-unexpected-token-json-position-0/ explica por qué el POST tira error del body JSON con un string (PP XP puede ayudar a entender como hacer bien el request) */
router.post('/:carrierId', async (req, res) => {
    
    const carrierId = req.params.carrierId;

    const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json",
        "X-VTEX-API-AppKey": appKey,
        "X-VTEX-API-AppToken": appToken
    }
    
    console.log('windowToBlock', req.query.windowToBlock)
    
    const requestOptionsGetBlockedWindows = {
        method: 'POST',
        headers,
        body: `"${req.query.windowToBlock}"`
    };

    const endpointUrl = `https://logistics.vtexcommercestable.com.br/api/logistics/pvt/configuration/carriers/4/adddayofweekblocked?an=vtexchileqa`

    console.log('Endpoint URL', endpointUrl)
    console.log('data', requestOptionsGetBlockedWindows)
    
    const apiCall = await fetchApi(endpointUrl, requestOptionsGetBlockedWindows)

    return res.json(apiCall)

});

export default router;