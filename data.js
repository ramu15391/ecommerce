import React from 'react'
import axios from 'axios'
function getData(){
    const domain = 'https://adidasapi.skavacommerce.com';
const axiosConfig = {
    url: domain+'/orchestrationservices/storefront/catalogs/categories/men/products?page=1&size=10',
    method: 'get',
    data : {
        page: 1,
        size: 10
    },
    headers: { 
        'x-store-id':'64',
        'x-version':'8.0.2',"Access-Control-Allow-Origin": "*",
        //'x-store-id': '11',
        'Content-Type': 'application/json',
        'x-sk-session-id': 'c6277b5cc919a5a265e9cd84a52a2ec4',}
}
axios(axiosConfig)
    .then((response) => {
      if (typeof successCbk == "function") {
        successCbk(response)
      }
      return response
    })
    .catch((response) => {
      if (typeof successCbk == "function") {
        errorCbk(response)
      }
      return response
    })
}
export const streamData = getData();
console.log('streamData',streamData);