import useApi from '@/composables/useApi.js';

const api = useApi();

export type ShowsByGenre = { [key: string]: Show[] };

export type Show = {
    id: number;
    url?: string;
    name: string;
    genres?: string[];
    summary?: string;
    rating?: {
        average?: number;
    };
    image?: {
        medium?: string;
        original?: string;
    };
};

export default {
    async fetchShows(): Promise<Show[]> {
        const { data } = await api.get('/shows');

        return data;
    },

    async getShow(id: number): Promise<Show> {
        const { data } = await api.get(`/shows/${id}`);

        return data;
    },

    async searchShows(query: string): Promise<Show[]> {
        const { data } = await api.get(`/search/shows?q=${query}`);

        return data.map((result: { show: Show }) => result.show);
    },

    groupShowsByGenre(shows: Show[]): ShowsByGenre {
        const showsByGenre: ShowsByGenre = {};

        shows.forEach((show) => {
            show.genres?.forEach((genre) => {
                if (!showsByGenre[genre]) {
                    showsByGenre[genre] = [];
                }

                showsByGenre[genre].push(show);
            });
        });

        return showsByGenre;
    },

    orderGenredShowsByRating(shows: ShowsByGenre): ShowsByGenre {
        const orderedShows: ShowsByGenre = {};

        Object.keys(shows).forEach((genre) => {
            orderedShows[genre] = shows[genre].sort(
                (a, b) => (b.rating?.average || 0) - (a.rating?.average || 0),
            );
        });

        return orderedShows;
    },
};
