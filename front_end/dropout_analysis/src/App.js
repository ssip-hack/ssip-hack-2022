import AdminLogin from "./AdminLogin";
import "./App.css";
import Body from "./Body";
import DetailsForm from "./DetailsForm";
import GeographicDetails from "./GeographicDetails";
import Header from "./Header";
import SchoolLogin from "./SchoolLogin";
import SchoolRegister from "./SchoolRegister";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <SchoolRegister />
      <SchoolLogin />

      <AdminLogin />
      <DetailsForm />
    </div>
  );
}

export default App;
