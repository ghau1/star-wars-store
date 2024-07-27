import { http, HttpResponse } from 'msw';
import { StarshipsResponse } from '../api/types';

export const handlers = [
  http.get('https://swapi.dev/api/starships/', () => {
    return HttpResponse.json<StarshipsResponse>({
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: 'Millennium Falcon',
          model: 'YT-1300 light freighter',
          manufacturer: 'Corellian Engineering Corporation',
          cost_in_credits: '100000',
          length: '34.37',
          max_atmosphering_speed: '1050',
          crew: '4',
          passengers: '6',
          cargo_capacity: '100000',
          consumables: '2 months',
          hyperdrive_rating: '0.5',
          MGLT: '75',
          starship_class: 'Light freighter',
          pilots: [],
          films: [],
          created: '2014-12-10T16:59:45.094000Z',
          edited: '2014-12-20T21:23:49.880000Z',
          url: 'https://swapi.dev/api/starships/10/',
        },
      ],
    });
  }),
];
