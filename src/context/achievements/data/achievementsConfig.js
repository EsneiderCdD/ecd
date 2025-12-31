import stiker1 from '@/assets/stiker/stiker1.png';
import stiker2 from '@/assets/stiker/stiker2.png';
import stiker3 from '@/assets/stiker/stiker3.png';
import stiker4 from '@/assets/stiker/stiker4.png';
import stiker5 from '@/assets/stiker/stiker5.png';
import stiker6 from '@/assets/stiker/stiker6.png';
import stiker7 from '@/assets/stiker/stiker7.png';
import stiker8 from '@/assets/stiker/stiker8.png';
import stiker9 from '@/assets/stiker/stiker9.png';

export const achievementsConfig = {
	explorer: {
		id: 'explorer',
		title: 'Turista Digital',
		description: 'Abriste tu primer proyecto',
		icon: stiker1,
		category: 'projects',
		condition: (state) => state.projectsOpened >= 1,
		rarity: 'common',
		points: 10
	},

	snooper: {
		id: 'snooper',
		title: 'Cazador de Proyectos',
		description: 'Abriste 3 proyectos diferentes',
		icon: stiker2,
		category: 'projects',
		condition: (state) => state.projectsOpened >= 3,
		rarity: 'rare',
		points: 25
	},

	interested: {
		id: 'interested',
		title: 'Cartógrafo del Portafolio',
		description: 'Abriste 5 proyectos diferentes',
		icon: stiker3,
		category: 'projects',
		condition: (state) => state.projectsOpened >= 5,
		rarity: 'legendary',
		points: 50
	},

	reader: {
		id: 'reader',
		title: 'Ex-Analfabeta',
		description: 'Revisaste tu primer documento técnico',
		icon: stiker4,
		category: 'files',
		condition: (state) => state.pdfsDownloaded >= 1,
		rarity: 'common',
		points: 15
	},

	scientist: {
		id: 'scientist',
		title: 'Bibliotecario Digital',
		description: 'Revisaste 3 fichas técnicas diferentes',
		icon: stiker5,
		category: 'files',
		condition: (state) => state.pdfsDownloaded >= 3,
		rarity: 'rare',
		points: 40
	},

	bibliotecario: {
		id: 'bibliotecario',
		title: 'PDF-ílo',
		description: 'Revisaste 5 documentos técnicos',
		icon: stiker6,
		category: 'files',
		condition: (state) => (state.pdfsDownloaded || 0) >= 5,
		rarity: 'legendary',
		points: 120
	},

	cineasta: {
		id: 'cineasta',
		title: 'Cineasta',
		description: 'Viste tu primer video del portafolio',
		icon: stiker7,
		category: 'media',
		condition: (state) => (state.videosWatched || 0) >= 1,
		rarity: 'common',
		points: 8
	},

	director: {
		id: 'director',
		title: 'Trilogía del Play',
		description: 'Viste 3 videos del portafolio',
		icon: stiker8,
		category: 'media',
		condition: (state) => (state.videosWatched || 0) >= 3,
		rarity: 'rare',
		points: 30
	},

	cineastaMaestro: {
		id: 'cineastaMaestro',
		title: 'Maratón Youtubero',
		description: 'Viste 5 videos del portafolio',
		icon: stiker9,
		category: 'media',
		condition: (state) => (state.videosWatched || 0) >= 5,
		rarity: 'legendary',
		points: 90
	}
};
