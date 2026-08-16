# AI Image Generator — Server

The backend server for an AI image generator built with Node.js and Express.

This server receives image-generation prompts from the React frontend, sends them securely to the OpenAI Image API, and returns the generated image to the client.

The server keeps the OpenAI API key away from the frontend, providing a secure layer between the React application and OpenAI.

## Features

- 🚀 Express REST API
- 🎨 AI image generation
- 🔐 Secure OpenAI API key handling
- 📡 Receives prompts from the React frontend
- 🖼️ Returns generated image data to the client
- 🌐 CORS support
- ⚠️ Basic request validation and error handling
- 🔧 Environment variable configuration

## Tech Stack

- Node.js
- Express
- OpenAI API
- dotenv
- CORS

## How It Works

The server provides an API endpoint that accepts an image-generation prompt.

```text
React Frontend
      │
      │ POST /api/submit
      │ { prompt: "..." }
      ▼
Express Server
      │
      │ OpenAI API
      ▼
OpenAI Image Generation
      │
      │ Generated Image
      ▼
Express Server
      │
      │ JSON response
      ▼
React Frontend
```

## Getting Started

### Prerequisites

You will need:

- Node.js
- npm
- An OpenAI API key

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the server directory:

```bash
cd <project-folder>
```

Install the dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root of the server project:

```env
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

The `OPENAI_API_KEY` is used by the server to authenticate with OpenAI.

**Never commit your `.env` file to GitHub.**

Make sure `.env` is included in your `.gitignore` file:

```gitignore
node_modules
.env
```

## Running the Server

Start the server using your configured npm script, or run:

```bash
node server.js
```

The server will run on:

```text
http://localhost:5000
```

You should see:

```text
Express app running...5000
```

## API Endpoint

### POST `/api/submit`

Accepts an image-generation prompt from the frontend.

#### Request

```json
{
  "prompt": "A futuristic city at sunset"
}
```

#### Response

A successful request returns the generated image data:

```json
{
  "image": "base64-image-data"
}
```

The React frontend can then use this data to display the generated image.

### Error Response

If no prompt is provided:

```json
{
  "error": "Please provide a prompt."
}
```

If image generation fails:

```json
{
  "error": "Something went wrong while generating the image."
}
```

## Project Structure

```text
server/
├── server.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Security

The OpenAI API key is intentionally kept on the server.

The React frontend should **never** contain the OpenAI API key because frontend code can be inspected by users.

Instead, the frontend communicates with this Express server, which handles communication with OpenAI.

```text
❌ React → OpenAI

✅ React → Express Server → OpenAI
```

Do not commit API keys or other sensitive credentials to the repository.

## Current Status

🚧 **In development**

This is the backend for a simple AI image generator and is currently focused on the core image-generation workflow.

## Future Improvements

- Input validation improvements
- More detailed API error handling
- Image generation options
- Configurable image sizes
- Image history
- Rate limiting
- Authentication
- Request logging
- Production deployment
- Improved security and API protection

## License

This project is available for educational and personal development purposes.
