const swaggerAutogen = require('swagger-autogen')
const outputFile = './swagger-output.json';
const endPointsFile = ['./routes/routing']
swaggerAutogen(outputFile, endPointsFile);