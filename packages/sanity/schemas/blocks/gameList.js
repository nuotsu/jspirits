import { t } from '../objects/locales'
import { IoBaseballOutline } from 'react-icons/io5'

export default {
	name: 'gameList',
	title: 'Game list',
	icon: IoBaseballOutline,
	type: 'object',
	fields: [
		{ name: 'heading', type: 'localeHeading', },
	],
	preview: {
		select: {
			heading: 'heading.text',
		},
		prepare({ heading }) {
			return {
				title: t(heading),
				subtitle: 'Game list',
			}
		},
	},
}