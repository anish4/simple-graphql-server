import genderNumber from './db/teacher_count.json';
import genderType from './db/genders.json';

interface Genders {
	male?: number;
	female?: number;
	queer?: number;
	transgender?: number;
}

const getData = {
	getGenderNumber: (location: keyof typeof genderNumber): Genders => {
		return genderNumber[location];
	},
	getGenderType: (): string[] => {
		return genderType.genders;
	},
};

export default getData;
