import AdminLogin from "./AdminLogin";
import "./App.css";
import Body from "./Body";
import DetailsForm from "./forms/DetailsForm";
import GeographicDetails from "./GeographicDetails";
import Header from "./Header";
import SchoolLogin from "./SchoolLogin";
import SchoolRegister from "./forms/SchoolRegister";
import home from "./home";


function App() {
  return (
    <div>
      <Header />
      <Body />
      <SchoolRegister />
      <SchoolLogin />

      <AdminLogin />
      <DetailsForm />

      {/* <Router>
        <Switch>
          <Route exact path="/" component={home} />
            
          <Route path="/forms/schoolRegister" component={SchoolRegister} />
                        
          <Redirect to="/" />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
