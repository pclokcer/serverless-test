'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const erdem = "erdem burada"
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      test: erdem
    }),
  };

  callback(null, response);
};
