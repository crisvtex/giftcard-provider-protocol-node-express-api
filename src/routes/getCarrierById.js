import uuidv4 from 'uuid/v4';
import { Router } from 'express';

import vtexAppKeyAppToken from '../constants/vtex-appkey-apptoken'
import accountName from '../constants/accountName'

const fetch = require('node-fetch')

const router = Router();

const appKey = vtexAppKeyAppToken.appKey
const appToken = vtexAppKeyAppToken.appToken

const fetchApi = async (url, options) => { 
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    return data
}

/*  API Endpoint: GET Get All BlockedWindows */
router.get('/', (req, res) => {
    //return res.send(Object.values(req.context.models.BlockedWindowss)); 
});


/*  API Endpoint: GET Get BlockedWindows by carriedId */
router.get('/:carrierId', async (req, res) => {
    
    const carrierId = req.params.carrierId;

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-VTEX-API-AppKey": appKey,
        "X-VTEX-API-AppToken": appToken
    }
    
    const requestOptionsGetBlockedWindows = {
        method: 'GET',
        headers,
        redirect: 'no-follow'
    };

    const endpointUrl = `https://logistics.vtexcommercestable.com.br/api/logistics/pvt/configuration/carriers/${carrierId}?an=${accountName}`

    console.log('Endpoint URL', endpointUrl)
    console.log('data', requestOptionsGetBlockedWindows)
    
    const apiCall = await fetchApi(endpointUrl, requestOptionsGetBlockedWindows)

    return res.json(apiCall);

});



export default router;