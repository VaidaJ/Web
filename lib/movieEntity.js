let Joi = require('joi');

const TVseriesSchema =
{
	id: Joi.number().min(0).required(),
	createDate: Joi.date().iso().required(),
	modifyDate: Joi.date().iso().required(),
	title: Joi.string(). min(1).max(150).required(),
	language: Joi.string().required(),
	genre: Joi.string().regex(/(Action)|(Adult)|(Adventure)|(Anime)|(Children)|(Comedy)|(Crime)|(DIY)|(Documentary)|(Drama)|(Espionage)|(Family)|(Fantasy)|(Food)|(History)|(Horror)|(Legal)|(Medical)|(Music)|(Mystery)|(Nature)|(Romance)|(Science-fiction)|(Sports)|(Supernatural)|(Thriller)|(Travel)|(War)|(Western)/),
	status: Joi.string().regex(/(Running)|(Ended)|(To Be Determined)/).required(),
	summary: Joi.string(),
	image: Joi.string().uri()
}