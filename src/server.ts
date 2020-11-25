import express, { Application, Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app: Application = express();
//for the graphql interface
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

app.get('/', (req: Request, res: Response) => {
	res.send(`<h1>hello world</h1>`);
});

app.listen(5000, () => {
	console.log('listening on port 5000');
});
