import { GraphQLObjectType, GraphQLInt } from 'graphql';
import getData from './getData';

interface LooseObject {
	[key: string]: any;
}

const getGenderField = (): LooseObject => {
	const gender = <LooseObject>{};

	getData.getGenderType().forEach((gen) => {
		gender[gen] = {
			type: GraphQLInt,
			description: `total number of ${gen}`,
		};
	});
	return gender;
};

const genderType = new GraphQLObjectType({
	name: 'genders',
	fields: getGenderField(),
});

export default genderType;
