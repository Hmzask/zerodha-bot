import { KiteConnect } from "kiteconnect";               //SDE kit from Zerodha.

const apiKey = process.env.API_KEY;                      // API key from Zerodha.

const apiSecret = process.env.API_SECRET;                // API secret provided by Zerodha.

const accessToken = process.env.ACCESS_TOKEN;            // Access token provided by Zerodha. when you authenticate using the 
//  API key.

const requestToken = process.env.REQUEST_TOKEN;          // Request token provided by Zerodha. when you authenticate using the apikey and secret key

const kc = new KiteConnect({ api_key: apiKey });         // Main app initialisation

kc.setAccessToken(accessToken);                         // Set the access token.

console.log(kc.getLoginURL());                         //Get the login URL. only needed for the first time. to get the request  token.

async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
getProfile();

async function placeOrder() {
    try {
      const orderParams = {
        exchange: 'NSE',
        tradingsymbol: 'INVENTURE',
        quantity: 10,
        order_type: 'MARKET',
        product: 'CNC',
        transaction_type: 'SELL',
        validity: 'DAY' 
      };
      
      const orderResponse = await kc.placeOrder('regular', orderParams);
      console.log("Order placed successfully:", orderResponse);
    } catch (err) {
      console.error("Error placing order:", err);
    }
  }
placeOrder();



// CAN USE THIS TO GENERATE THE REQUEST TOKEN,ACCCESS TOKEN AND API SECRET.

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



