import bronzeMedal from '@/assets/icons/bronze-medal.webp';
import silverMedal from '@/assets/icons/silver-medal.webp';
import goldMedal from '@/assets/icons/gold-medal.webp';

export const achievementsConfig = {
	explorer: {
		id: 'explorer',
		title: 'Turista Digital',
		description: 'Abriste tu primer proyecto',
		icon: bronzeMedal,
		condition: (state) => state.projectsOpened >= 1,
		rarity: 'common'
	},

	snooper: {
		id: 'snooper',
		title: 'Cazador de Proyectos',
		description: 'Abriste 3 proyectos diferentes',
		icon: silverMedal,
		condition: (state) => state.projectsOpened >= 3,
		rarity: 'rare'
	},

	interested: {
		id: 'interested',
		title: 'Cartógrafo del Portafolio',
		description: 'Abriste 5 proyectos diferentes',
		icon: goldMedal,
		condition: (state) => state.projectsOpened >= 5,
		rarity: 'legendary'
	},

	reader: {
		id: 'reader',
		title: 'Ex-Analfabeta',
		description: 'Revisaste tu primer documento técnico',
		icon: bronzeMedal,
		condition: (state) => state.pdfsDownloaded >= 1,
		rarity: 'common'
	},

	scientist: {
		id: 'scientist',
		title: 'Bibliotecario Digital',
		description: 'Revisaste 3 fichas técnicas diferentes',
		icon: silverMedal,
		condition: (state) => state.pdfsDownloaded >= 3,
		rarity: 'rare'
	},

	bibliotecario: {
		id: 'bibliotecario',
		title: 'PDF-ílo',
		description: 'Revisaste 5 documentos técnicos',
		icon: goldMedal,
		condition: (state) => (state.pdfsDownloaded || 0) >= 5,
		rarity: 'legendary'
	},

	cineasta: {
		id: 'cineasta',
		title: 'Cineasta',
		description: 'Viste tu primer video del portafolio',
		icon: bronzeMedal,
		condition: (state) => (state.videosWatched || 0) >= 1,
		rarity: 'common'
	},

	director: {
		id: 'director',
		title: 'Trilogía del Play',
		description: 'Viste 3 videos del portafolio',
		icon: silverMedal,
		condition: (state) => (state.videosWatched || 0) >= 3,
		rarity: 'rare'
	},

	cineastaMaestro: {
		id: 'cineastaMaestro',
		title: 'Maratón Youtubero',
		description: 'Viste 5 videos del portafolio',
		icon: goldMedal,
		condition: (state) => (state.videosWatched || 0) >= 5,
		rarity: 'legendary'
	}
};

