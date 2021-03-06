
const API_PATHS = {
  product: 'https://j25gzwc0cl.execute-api.eu-west-1.amazonaws.com/prod',
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: 'https://dziq1ndu17.execute-api.eu-west-1.amazonaws.com/prod',
  bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  cart: 'https://th1mirbmo5.execute-api.eu-west-1.amazonaws.com/prod/api',  // Proxified (EB Path -> API Gateway proxy) to support HTTPS
};

export default API_PATHS;
