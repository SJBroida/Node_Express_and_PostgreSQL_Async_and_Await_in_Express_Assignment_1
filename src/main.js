const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  try {
    const response = await generateSlogan(request);
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  } catch (error) {
    next(error);
  }
}

async function fullSession(request) {
  try {
    const message = await generateMessage();
    console.log(message);
    await getSlogan(request);
    const farewell = await goodbye();
    console.log(farewell);
  } catch (error) {
    next(error);
  }

}

module.exports = { getSlogan, fullSession };
