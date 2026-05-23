const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contact API',
        description: 'this is the description of the API for the contact list application',
    },
    host: 'https://cse-341-spring26.onrender.com/',
    schemes: ['http'],
};

const outputFile = './sOutput.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);