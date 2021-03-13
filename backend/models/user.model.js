const mongoose = require( 'mongoose' );

const PhotoScema = mongoose.Schema( {
	id : {
		type : String,
		require : true,
	},
	messagge : {
		type : String,
	},
	picture : {
		type : String,
	},
	pictureMedium : {
		type : String,
	},
	pictureSmall : {
		type : String,
	},
	pictureStored : {
		type : String,
	},
	timestamp : {
		type : Number
	}
} );

const UserSchema = mongoose.Schema( {
	id : {
		type : String,
		require : true,
	},
	entries:[PhotoScema]
} );

module.exports = mongoose.model( 'UserModel', UserSchema );