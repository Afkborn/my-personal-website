import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "../home/Home";
import Navigation from "../navi/Navigation";
import Footer from "../footer/Footer";
import NotFound from "../common/NotFound";
function App() {
  return (
    <Container>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <Footer></Footer>
    </Container>
  );
}

export default App;
