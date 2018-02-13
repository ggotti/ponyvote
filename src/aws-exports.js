const config = {
    API_KEY: 'da1-ifF6Ebu5Rbu597p5IUnQZw',
    AUTH_TYPE: 'API_KEY',
    HOST: 'gk3rcecs2bemna5enag534ml5a.appsync-api.us-east-1.amazonaws.com', // Your hostname
    REGION: 'us-east-1',  //Your region
    PATH: '/graphql',
}
config.ENDPOINT = `https://${config.HOST}${config.PATH}`;
export default config;