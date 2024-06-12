
# ChatGPT Chrome Extension

This is a simple Chrome extension to interact with GPT-3.5-turbo.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Create a `.env` file in the root of the project and add your OpenAI API key:**

   ```sh
   touch .env
   ```

   Add the following line to the `.env` file:

   ```env
   API_KEY=your-api-key-here
   ```

3. **Build the project:**

   ```sh
   npm run build
   ```

   This will generate the `dist/popup.js` file with your API key injected.

4. **Load the extension in Chrome:**

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top-right corner.
   - Click "Load unpacked" and select the directory where you cloned the repository.
