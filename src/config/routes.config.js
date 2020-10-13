import DashboardContainer from '../components/containers/Dashboard.container';
import ProfileContainer from '../components/containers/Profile.container';
import HomeView from '../components/views/Home.view';
import MapView from '../components/views/Map.view';
import TravelView from '../components/views/Travel.view';

const routers = [
    {
        path: '/',
        component: HomeView,
        children: [
            { path: '/dashboard', component: DashboardContainer },
            { path: '/profile', component: ProfileContainer },
        ],
    },
    { path: '/map', component: MapView },
    {
        path: '/travel',
        component: TravelView,
        children: [{ path: '/travel/', component: null }],
    },
];

export default routers;
