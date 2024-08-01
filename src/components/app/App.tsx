import { Navigate, Route, Routes } from "react-router-dom";
import ContactListContainer from "../contactList/ContactListContainer";

function App() {
  return (
    <Routes>
      <Route path="/contactList" element={<ContactListContainer />} />
      <Route path="*" element={<Navigate to="/contactList" replace />} />
    </Routes>
  );
}

export default App;
