import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let videos = [
      { id: 1, name: 'Lamborghini Aventador / Megafactories (National Geographic)', url: '8TjScK-fMgc', top: true },
      { id: 2, name: 'The Most Luxurious First Class Airlines', url: '5VqhIzigk1s', top: true },
      { id: 3, name: 'Pelé: Birth of a Legend Official Trailer', url: 'XBrfxHOXsDE', top: true },
      { id: 4, name: 'Oig Rig The World\'s Largest Oil Rig – Big Bigger Biggest', url: '7w0xaHZGTT8', top: true },
      { id: 5, name: 'Switchfoot - The Original', url: 'AiZiqKUp-_k', top: true },
      { id: 6, name: 'The Trucks Discovery Science History Documentary HD', url: 'kUX0PHq1M7U', top: true },
      { id: 7, name: 'MegaFactories Mack Truck National Geographic HD', url: 'F-vAQq_cK0I', top: false },
      { id: 8, name: 'Angular 2 Tutorial and Sublime Text Tips -- LazyWeb #7', url: 'M6ZRJX-3Exw', top: false },
    ];

    return {videos};
  }
}
