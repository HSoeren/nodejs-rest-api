# nodejs-rest-api

This is a simple REST API built with Node.js, Express, and MongoDB.

You need to specify the MongoDB connection string in the .env file in the root directory or in the environment variable MONGO_URI.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm install
npm start
``` 

then open [http://localhost:5555](http://localhost:5555)

## Docker

```bash
docker build -t nodejs-rest-api .
docker run -p 5555:5555 nodejs-rest-api
```

then open [http://localhost:5555](http://localhost:5555)