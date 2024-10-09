import HandPickedCollections from "../components/HandPickedCollections"
import HeroSection from "../components/HeroSection"
import LatestRecipes from "../components/LatestRecipes"
import NewsLetter from "../components/NewsLetter"
import PopularCategories from "../components/PopularCategories"
import SuperDelicious from "../components/SuperDelicious"
import SweetTooth from "../components/SweetTooth"

const Home = () => {
  return (
    <div>
        <HeroSection />
        <SuperDelicious />
        <SweetTooth />
        <PopularCategories />
        <NewsLetter />
        <HandPickedCollections />
        <LatestRecipes />
        
    </div>
  )
}

export default Home