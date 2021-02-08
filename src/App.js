import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import GiftForYou from "./components/gift-for-you";
import GameCard from "./components/game-card";
import IntroWeb from "./components/intro-web";
import "./App.scss";

export default function App() {
  return (
    <div className="app-container">
      <NavigationBar />
      <div className="app-content">
        <Switch>
          <Route path="/game" exact component={GameCard} />
          <Route path="/gift" exact component={GiftForYou} />
          <Route path="/">
            <IntroWeb />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
