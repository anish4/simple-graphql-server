import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import getData from '../getData';
import genderType from '../genderTypes';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: {
			gender: {
				type: genderType,
				args: {
					name: {
						type: GraphQLString,
					},
				},
				resolve: (_, { name }) => getData.getGenderNumber(name),
			},
		},
	}),
});

export default schema;
