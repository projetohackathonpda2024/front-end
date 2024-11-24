import { Route, Routes} from "react-router-dom";
import FormsHotel from "../pages/formsHotel";
import Searchotel from "../pages/searchhotels";
import Home from "../pages/home";

const Router = () => {
    return (
      <>
       
          <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/cadastro" element={<FormsHotel />} />
            <Route path="/pesquisa" element={<Searchotel />} />
          </Routes>
    
      </>
    );
}
 
export default Router;