var userInput;
userInput = 5;
userInput = 'test';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An erro ocurred', 500);
