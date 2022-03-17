import Header from "../components/header";
import RightActions from "./rightActions";
import Sponsors from "./sponsors";
import "../../utils/css/home.css";
import ShopPage from "./shop";
import CloudGaming from "./cloudGaming";
import CharacterPage from "./character";
import GameInfo from "./gameInfo";
import NewsPage from "./newPage";
import ContactPage from "./constact";
import Footer from "../components/footer";

function Homepage() {
  return (
    <div>
      <div className="mainHeader">
        <Header />
        <div>
          <RightActions />
        </div>
      </div>
      <div className="sponsors">
        <Sponsors />
      </div>

      <div className="shop">
        <ShopPage />
      </div>

      <div className="cloud-gaming">
        <CloudGaming />
      </div>

      <div className="character">
        <CharacterPage />
      </div>

      <div className="gameInfo">
        <GameInfo />
      </div>

      <div className="news">
        <NewsPage />
      </div>

      <div className="contact">
        <ContactPage />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
