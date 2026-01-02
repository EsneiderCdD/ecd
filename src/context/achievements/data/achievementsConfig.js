import stiker1 from '@/assets/stickers/stiker1.png';
import stiker2 from '@/assets/stickers/stiker2.png';
import stiker3 from '@/assets/stickers/stiker3.png';
import stiker4 from '@/assets/stickers/stiker4.png';
import stiker5 from '@/assets/stickers/stiker5.png';
import stiker6 from '@/assets/stickers/stiker6.png';
import stiker7 from '@/assets/stickers/stiker7.png';
import stiker8 from '@/assets/stickers/stiker8.png';
import stiker9 from '@/assets/stickers/stiker9.png';

export const achievementsConfig = {
	explorer: {
		id: 'explorer',
		title: 'Turista Digital',
		description: 'Abriste tu primer proyecto',
		icon: stiker1,
		condition: (state) => state.projectsOpened >= 1,
		rarity: 'common'
	},

	snooper: {
		id: 'snooper',
		title: 'Cazador de Proyectos',
		description: 'Abriste 3 proyectos diferentes',
		icon: stiker2,
		condition: (state) => state.projectsOpened >= 3,
		rarity: 'rare'
	},

	interested: {
		id: 'interested',
		title: 'Cartógrafo del Portafolio',
		description: 'Abriste 5 proyectos diferentes',
		icon: stiker3,
		condition: (state) => state.projectsOpened >= 5,
		rarity: 'legendary'
	},

	reader: {
		id: 'reader',
		title: 'Ex-Analfabeta',
		description: 'Revisaste tu primer documento técnico',
		icon: stiker4,
		condition: (state) => state.pdfsDownloaded >= 1,
		rarity: 'common'
	},

	scientist: {
		id: 'scientist',
		title: 'Bibliotecario Digital',
		description: 'Revisaste 3 fichas técnicas diferentes',
		icon: stiker5,
		condition: (state) => state.pdfsDownloaded >= 3,
		rarity: 'rare'
	},

	bibliotecario: {
		id: 'bibliotecario',
		title: 'PDF-ílo',
		description: 'Revisaste 5 documentos técnicos',
		icon: stiker6,
		condition: (state) => (state.pdfsDownloaded || 0) >= 5,
		rarity: 'legendary'
	},

	cineasta: {
		id: 'cineasta',
		title: 'Cineasta',
		description: 'Viste tu primer video del portafolio',
		icon: stiker7,
		condition: (state) => (state.videosWatched || 0) >= 1,
		rarity: 'common'
	},

	director: {
		id: 'director',
		title: 'Trilogía del Play',
		description: 'Viste 3 videos del portafolio',
		icon: stiker8,
		condition: (state) => (state.videosWatched || 0) >= 3,
		rarity: 'rare'
	},

	cineastaMaestro: {
		id: 'cineastaMaestro',
		title: 'Maratón Youtubero',
		description: 'Viste 5 videos del portafolio',
		icon: stiker9,
		condition: (state) => (state.videosWatched || 0) >= 5,
		rarity: 'legendary'
	}
};
