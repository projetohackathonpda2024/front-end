import { Route, Routes} from "react-router-dom";
import FormsHotel from "../pages/formsHotel";
import Searchotel from "../pages/searchhotels";

const Router = () => {
    return (
      <>
       
          <Routes>
            <Route path="/" element={<Searchotel />} />
            <Route path="/cadastro" element={<FormsHotel />} />
          </Routes>
    
      </>
    );
}
 
export default Router;