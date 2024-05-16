import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                /* if takes time to load the page it will show loading.. else it will show <outlet> */
                navigation.state === "loading" ? 
                <p>Loading</p> : 
                <Outlet></Outlet>
            }
            {/* using <outlet></outlet>, here we want show the nested child route */}
            

            <Footer></Footer>
        </div>
    );
};

export default Home;