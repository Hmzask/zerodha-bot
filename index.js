import { KiteConnect } from "kiteconnect"; //SDE kit from Zerodha.

const apiKey = "b1at9vmtynaeoq1w"; // API key from Zerodha.
const accessToken = "I2zvhHIycV7NUl7zprI0Dd1Nt7R6zeWG" // Access token provided by Zerodha. when you authenticate using the 
//  API key.
const requestToken = "QjN33qA3wDfHfc1P82n20sWSuvMQKjQi" // Request token provided by Zerodha. when you authenticate using the 
const apiSecret = "p6yqpo7rt0btkxjw93k30059gticmf4s" // API secret provided by Zerodha.
const kc = new KiteConnect({ api_key: apiKey }); // Main app initialisation
kc.setAccessToken(accessToken); // Set the access token.

console.log(kc.getLoginURL()); //Get the login URL. only needed for the first time. to get the request token.

async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
getProfile();

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }
// generateSession();


async function placeOrder() {
    try {
      const orderParams = {
        exchange: 'NSE',
        tradingsymbol: 'INVENTURE',
        quantity: 10,
        order_type: 'MARKET',
        product: 'CNC',
        transaction_type: 'BUY',
        validity: 'DAY' 
      };
      
      const orderResponse = await kc.placeOrder('regular', orderParams);
      console.log("Order placed successfully:", orderResponse);
    } catch (err) {
      console.error("Error placing order:", err);
    }
  }

placeOrder();

