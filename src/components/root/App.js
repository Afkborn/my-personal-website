import { Route, Switch } from "react-router-dom";
import Home from "../home/Home";
import Navigation from "../navi/Navigation";
import Footer from "../footer/Footer";
import NotFound from "../common/NotFound";


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
