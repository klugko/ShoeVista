# ShoeVista

E-commerce application for footwear built with React, Node.js, and MongoDB.

## Tech Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Express.js + MongoDB
- Containerization: Docker

## Quick Start with Docker

```bash
git clone https://github.com/klugko/ShoeVista.git
cd ShoeVista
docker-compose up --build
```

Open http://localhost:5073 in your browser.

## Local Development

### Prerequisites

- Node.js 18+
- MongoDB

### Backend Setup

```bash
cd server
npm install
```

Create `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/shoevista
```

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
```

Create `client/.env`:
```
VITE_BASE_URL=http://localhost:5000
```

```bash
npm run start
```

Open http://localhost:5173

## Project Structure

```
ShoeVista/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   └── context/        # React context providers
│   └── Dockerfile
├── server/                 # Express backend
│   ├── controllers/        # Route handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   └── Dockerfile
├── docker-compose.yml
└── mongo-init.js           # Database seed data
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/ | Get all products |
| GET | /api/product/:id | Get single product |
| GET | /api/category/:category | Get products by category |
| GET | /api/filter/topRated | Get top rated products |
| GET | /api/filter/bestSellers | Get best sellers |
| GET | /api/products/search?q= | Search products |
