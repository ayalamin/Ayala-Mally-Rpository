
import { Routes, Route } from 'react-router-dom'
import Login from "./login";
import HomeCleaners from "./homeCleaners"
import HomeUser from "./homeUsers"
import SignInUser from "./signInUser"
import SignInCleaners from "./signInCleaners"
import Home from "./home"
import FindCleaner from './findCleaner';
//import NavBar from './nuvBar';
import CleanerPage from './cleanerPage';
import Sale from './sale';
import LogOut from './logout';
import OrdersUser from './ordersUser';
import OrdersCleaner from './ordersCleaner';
////////////////////////////////////////////
import UpdateCleaner from './updateCleaner';
import ProfileCleaner from './profileCleaner';
import UpdateUser from './updateUser';
import Director from './director';
import CleanerSelectPage from './cleanerSelectPage'
import ProfileUser from './profileUser'
import DirectorPage from './directorPage'
function Main() {
    debugger
    return (
        <div className="App">
            <Routes>
            <Route exact element={<DirectorPage />} path="/directorPage"/>
              <Route exact element={<Home />} path="/"/>
                <Route exact element={<Login />} path="/login" />
                <Route element={<HomeCleaners />} path="/:id/homeCleaner" />
                <Route element={<HomeCleaners />} path="/homeCleaner" />
                <Route element={<CleanerPage />} path="/cleanerPage" />
                <Route element={<FindCleaner />} path="/:name/findCleaner" />
                <Route element={<FindCleaner />} path="/findCleaner" />
                <Route element={<HomeUser />} path="/:id/homeUser" />
                <Route element={<HomeUser />} path="/homeUser" />
                <Route element={<SignInUser />} path="/signInUser" />
                <Route element={<SignInCleaners />} path="/signInCleaners" />
                <Route exact element={<Sale />} path="/:name/sale"/>
                <Route exact element={<Sale />} path="/sale"/>
                <Route element={<LogOut />} path="/logout" />
                <Route element={<OrdersUser />} path="/ordersUser" />
                <Route element={<OrdersUser />} path="/:name/ordersUser" />
                <Route element={<OrdersCleaner />} path="/:name/ordersCleaner" />
                <Route element={<OrdersCleaner />} path="/ordersCleaner" />
                <Route element={<FindCleaner />} path="/findCleaner" />
                <Route element={<UpdateCleaner />} path="/updateCleaner" />
                <Route element={<ProfileCleaner />} path="/profileCleaner" />
                <Route element={<UpdateUser />} path="/updateUser" />
                <Route element={<Director />} path="/Director" />
                <Route element={<ProfileUser />} path="/:name/profileUser" />
                <Route element={<ProfileUser />} path="/profileUser" />
                <Route element={<CleanerSelectPage />} path="/cleanerSelectPage" />

            </Routes>
        </div>
    );
}
export default Main;