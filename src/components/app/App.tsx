import { Navigate, Route, Routes } from "react-router-dom";
import ContactListContainer from "../contactList/ContactListContainer";
import ContactPageContainer from "../contactPage/ContactPageContainer";

function App() {
  return (
    <Routes>
      <Route path="/contactList" element={<ContactListContainer />} />
      <Route path="/contact/:id" element={<ContactPageContainer/>}/>
      <Route path="*" element={<Navigate to="/contactList" replace />} />
    </Routes>
  );
}

export default App;
