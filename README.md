# Zerodha Trade Bot

A JavaScript-based trading bot that interacts with the Zerodha API to automate stock market trades.

## 🚀 Features

- Place and manage trades automatically
- Integrated with Zerodha Kite Connect API
- Configurable strategy logic
- Logging and error handling
- Lightweight and fast

## 🛠 Tech Stack

- **JavaScript**
- **Node.js**
- **Zerodha Kite Connect API**
- **Docker** (for containerization)
- ***MIT License***

- -> After cloning the repo, create a .env file
put you all the keys into it.  you are 
good to go.

## 📦 Getting Started

### 1. Clone the repository



```bash
git clone https://github.com/Hmzask/zerodha-trade-bot.git
cd zerodha-trade-bot

npm install

API_KEY=your_kite_api_key
API_SECRET=your_kite_secret
ACCESS_TOKEN=your_access_token
REQUEST_TOKEN=RequestToken  // This token will be used only once. when you authenticate.

// Run the Bot/App
node index.js



