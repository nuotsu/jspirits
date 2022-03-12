import { MdArtTrack } from 'react-icons/md'
import { t } from '../objects/locales'

export default {
	name: 'heroHome',
	title: 'Hero (Homepage)',
	icon: MdArtTrack,
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
			};
		},
	},
}
