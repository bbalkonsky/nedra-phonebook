import HomePage from "@/pages/HomePage";
import FoundPeolplePage from "@/pages/UnitStaffPage";
import LoginPage from "@/pages/LoginPage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/foundPeople/:id/',
        component: FoundPeolplePage
    },
    {
        path: '/login/',
        component: LoginPage
    }
]

export default routes;
