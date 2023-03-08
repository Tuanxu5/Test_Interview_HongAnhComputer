import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainBreadcrumb from "./layout/MainBreadcrumb";
import OrderLookup from "./layout/OrderLookup";

function App() {
  return (
    <div className=" bg-[#F5F5FA] py-[16px] max-sm-[640px]:bg-white">
      <Header></Header>
      <MainBreadcrumb></MainBreadcrumb>
      <OrderLookup></OrderLookup>
      <Footer></Footer>
    </div>
  );
}

export default App;
