import Layout from "../../components/layout";
import Banner from "../../components/home/banner";
import DownloadApp from "../../components/home/download-app";
import Testimonials from "../../components/home/testimonials";
import Arenas from "../../components/home/arenas";
import Contact from "../../components/home/contact";

const Home = () => {
    return (
        <Layout>
            <Banner />
            <Arenas />
            <Testimonials />
            <DownloadApp />
            <Contact />
        </Layout>
    );
};
export default Home;
