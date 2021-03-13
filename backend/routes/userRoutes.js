const express = require( 'express' );
const userService = require( '../services/user.service' );
// const companyValidation = require( '../validators/company.validator' );

const userRoutes = express.Router();

userRoutes.route( '/' ).post(
	// companyValidation.validateAddCompany,
	userService.upsertUser,
);

userRoutes.route( '/' ).get(
	// companyValidation.validateGetAllCompany,
	userService.getUser,
);


module.exports = userRoutes;