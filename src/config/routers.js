import HomeView from '../views/Home.view';
import MapView from '../views/Map.view';
import TravelView from '../views/Travel.view';

const routers = [
    { path: '/', component: HomeView },
    { path: '/map', component: MapView },
    {
        path: '/',
        component: TravelView,
        children: [{ path: '/', component: null }],
    },
];

export default routers;
