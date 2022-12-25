const express = require('express');
const connectDb = require("./config/db");
const { catchphrases, questions } = require("./routes/index");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const PORT = 5555;
const HOST = '0.0.0.0';

const app = express();
connectDb();

app.use(express.json());

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'IHNN Rest API',
			description: "Diese REST API sollte solange sie, wie jetzt, öffenlich zugänglich ist, ausschließlich für Fragen verwendet werden."
		},
	},
	apis: ["./routes/question.js"]
}

app.use('/questions', questions)

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
  