import service from '@/services/tvmaze.service.js';
import { describe, it, expect } from 'vitest';

describe('test tvmaze service', () => {
    it('groupShowsByGenre method groups shows by genre', () => {
        const shows = [
            {
                id: 1,
                url: 'https://www.tvmaze.com/shows/1/show1',
                summary: 'Summary',
                rating: { average: 8.5 },
                name: 'Show 1',
                genres: ['genre1', 'genre2'],
            },
            {
                id: 2,
                url: 'https://www.tvmaze.com/shows/1/show2',
                summary: 'Summary',
                rating: { average: 9 },
                name: 'Show 2',
                genres: ['genre2'],
            },
        ];

        const groupedShows = service.groupShowsByGenre(shows);
        expect(groupedShows).toEqual({
            genre1: [
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 8.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
            ],
            genre2: [
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 8.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
                {
                    id: 2,
                    url: 'https://www.tvmaze.com/shows/1/show2',
                    summary: 'Summary',
                    rating: { average: 9 },
                    name: 'Show 2',
                    genres: ['genre2'],
                },
            ],
        });
    });

    it('orderGenredShowsByRating method orders shows by rating within each genre', () => {
        const shows = {
            genre1: [
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 8.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
                {
                    id: 2,
                    url: 'https://www.tvmaze.com/shows/1/show2',
                    summary: 'Summary',
                    rating: { average: 6.7 },
                    name: 'Show 2',
                    genres: ['genre2'],
                },
            ],
            genre2: [
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 7.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
                {
                    id: 2,
                    url: 'https://www.tvmaze.com/shows/1/show2',
                    summary: 'Summary',
                    rating: { average: 9 },
                    name: 'Show 2',
                    genres: ['genre2'],
                },
            ],
        };

        const orderedShows = service.orderGenredShowsByRating(shows);
        expect(orderedShows).toEqual({
            genre1: [
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 8.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
                {
                    id: 2,
                    url: 'https://www.tvmaze.com/shows/1/show2',
                    summary: 'Summary',
                    rating: { average: 6.7 },
                    name: 'Show 2',
                    genres: ['genre2'],
                },
            ],
            genre2: [
                {
                    id: 2,
                    url: 'https://www.tvmaze.com/shows/1/show2',
                    summary: 'Summary',
                    rating: { average: 9 },
                    name: 'Show 2',
                    genres: ['genre2'],
                },
                {
                    id: 1,
                    url: 'https://www.tvmaze.com/shows/1/show1',
                    summary: 'Summary',
                    rating: { average: 7.5 },
                    name: 'Show 1',
                    genres: ['genre1', 'genre2'],
                },
            ],
        });
    });
});
