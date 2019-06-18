//use secret key for api calls => avoid ddos
//making API request from client side with secret key => not secured
const axios = require('axios');
//get every variable in .env file 
//and add it to process.env object
require('dotenv').config();
axios({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending',
    params: {
        api_key: process.env.GIPHY_API_KEY,
        limit: '5'
    }
}).then(// ? for query params can go in any order
    //& to concat
    response => {
        console.log(response.data.data);
    }

).catch(
    error => {
        console.log(error);
    }
)
//environment variables
//add it in .gitignore
//for heroku or to share with others => the key need to be provided manually