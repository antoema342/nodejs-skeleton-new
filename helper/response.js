/**
 * @author Mas Anto
 */

var apiResponse = function(responseCode, responseMessage, responseData) {
    return {
      status: responseCode,
      message: responseMessage,
      data: responseData,
    }
  };
  
  module.exports = apiResponse;