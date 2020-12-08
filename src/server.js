import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { createProxyMiddleware } from 'http-proxy-middleware';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const devProxy = {
	'/.netlify': {
		target: 'http://localhost:9000',
		pathRewrite: { '^/.netlify/functions': '' }
	}
};

const app = express();

if (dev && devProxy)
{
	Object.keys(devProxy).forEach((context) => {
		app.use(createProxyMiddleware(context, devProxy[context]));
	});
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev }),
	sapper.middleware()
)
.listen(PORT, err => {
	if (err) console.log('error', err);
});
