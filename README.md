# Somnia CLI

This is a **custom interactive CLI tool** designed to automate various tasks in the Somnia testnet.  
It provides a simple menu-driven interface for working with wallets, tokens, and smart contracts directly from your terminal.

## Features
- 📊 **Update Wallets Table** — fetch and refresh wallet information into a spreadsheet.  
- 🔓 **Enable Wallets with Zero Balance** — activate inactive wallets that have no funds.  
- 🔒 **Disable Wallets with Zero Balance** — temporarily turn off empty wallets.  
- 🟢 **Enable All Wallets** — turn on all wallets in the list.  
- 🔴 **Disable All Wallets** — turn off all wallets at once.  
- 💧 **Get STT from Faucet** — claim tokens from the faucet for testing purposes.  
- 🎲 **Send STT to a Random Address** — distribute tokens randomly to different addresses.  
- 📝 **Deploy ERC-20 Contract** — deploy your own ERC-20 token smart contract.  
- 🖼 **Deploy ERC-721 Contract** — deploy an NFT ERC-721 smart contract.  
- 🚪 **Exit** — close the application.

## How It Works
The bot runs entirely in your terminal and displays a numbered menu.  
Simply choose an action by entering its number, and the bot will perform the corresponding task automatically.

## Requirements
- Node.js 18+  
- NPM or Yarn  

## Installation
```bash
git clone <your-repo-url>
cd <your-repo-folder>
npm install
node index.js
