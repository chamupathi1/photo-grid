const express = require( 'express' );

const app = express();
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const secrets  = require('./secrets');

const userRoutes = require( './routes/userRoutes' );

app.use( cors() );

app.use( bodyParser.json() );

const uri = `mongodb+srv://${secrets.MONGO_USER}:${secrets.MONGO_PW}@cluster0.zlwqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect( uri, { useNewUrlParser : true } );
const { connection } = mongoose;

connection.once( 'open', () => {
	console.log( 'MongoDB database connection established successfully' );
} );


app.use( '/api/v1/user', userRoutes );

// error handler
app.use( ( error, req, res, next ) => { // eslint-disable-line no-unused-vars
	if ( error.isServer ) {
		// log server errors 5xx status codes
		logger.error( error );
		return res.status( 500 ).json( 'internal server error' );
	}

	if ( error.output && error.output.statusCode ) {
		return res.status( error.output.statusCode ).json( error.output.payload );
	}
	
	console.log( error );

	return res.status( 500 ).json( 'internel server error' );
} );



app.listen( secrets.PORT, () => {
	console.log( `Server is running on Port: ${secrets.PORT}` );
} );
