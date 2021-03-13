const User = require( '../models/user.model' );
const boom = require( 'boom' );

/* create new company*/
module.exports.upsertUser = async ( req, res, next ) => {
	const body = req.body;
	const { id }  = body

	const user = new User( body );
	try {
		const exsistingUser = await User.findOne( { id } );
		
		if ( exsistingUser ) {
			exsistingUser.entries = body.entries

			exsistingUser
			.save()
			.then( ( saved ) => {
				res.status( 201 ).json( saved );
			} )
			.catch( ( ) => next( boom.conflict( 'server conflict 1', {} ) ) );
		} else {
			user.save()
				.then( ( saved ) => {
					res.status( 201 ).json( saved );
				} )
				.catch( ( ) => next( boom.conflict( 'server conflict 2', {} ) ) );

		}
	} catch ( error ) {
		console.log(error)
		next( boom.conflict( 'server conflict 3', {} ) );
	}
};

/* get company */
module.exports.getUser = async ( req, res, next ) => {
	try {
		// User.collection.drop()
		User.findOne( { }, ( err, doc ) => {
			if ( err ) {
				next( boom.notFound() );
			}
			else if ( doc === null ) {
				next( boom.notFound() );
			}
			else
			res.status( 200 ).json( doc || {} );
		} );
	} catch ( error ) {
		next( boom.notFound( 'not found', {} ) );
	}
};
