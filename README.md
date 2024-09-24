# Simple Vulnerable Api Challenge

Welcome to the Simple Vulnerable Api Challenge! This API is designed for educational purposes, allowing enthusiast to test their cybersecurity skills by interacting with various endpoints to retrieve flags.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Exposing the API to Others](#exposing-the-api-to-others)
- [Notes](#notes)
- [Disclaimer](#disclaimer)

## Setup

### Prerequisites

- Node.js
- ngrok (if you want to expose the API over the internet)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HaBeebCyber/SimpVulnApi.git
   cd SimpVulnApi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node index.js
   ```

   The server will start running on `http://localhost:3000`.

## Usage

- **Interact with the API**:
  You can use tools like `curl`, Postman, or any HTTP client to interact with the API endpoints. 

- **All interactions will be done via `http://localhost:3000`.**

## Exposing the API to Others

If you want others to access the API over the internet, you can use ngrok to expose your localhost:

1. **Install ngrok**:
   If you haven’t installed ngrok yet, download it from Ngrok download page and set it up:

   In terminal extract using:

   ```bash
   sudo tar -xvzf ~/Downloads/https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
   ```

2. **Authenticate ngrok**:
   Log in to your ngrok account and get your authtoken, then run:

   ```bash
   ngrok config add-authtoken YOUR_AUTHTOKEN
   ```

3. **Expose your localhost**:
   Run the following command to expose your local server:

   ```bash
   ngrok http 3000
   ```

4. **Share the URL**:
   ngrok will provide you with a public URL (e.g., `https://abcdef1234.ngrok.io`). Share this URL with others so they can access the API.

## Notes

- This API is intentionally vulnerable and should only be used in a controlled environment.
- Ensure your Node.js server is running when others are trying to access the API via ngrok.

## Disclaimer

This API is intended solely for educational purposes. Do not use it for malicious activities. The author assumes no responsibility for any misuse.
