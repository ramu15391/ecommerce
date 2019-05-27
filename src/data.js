import axios from 'axios'
function getData(){
    const domain = 'https://adidasapi.skavacommerce.com';
const axiosConfig = {
    url: '/orchestrationservices/storefront/catalogs/categories/men/products?page=1&size=10',
    method: 'get',
    data : {
        page: 1,
        size: 10
    },
    headers: { 
        'x-store-id':'64',
        'x-version':'8.0.2',"Access-Control-Allow-Origin": "*"}
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