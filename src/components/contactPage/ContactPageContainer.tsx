import { useParams } from "react-router-dom";
import ContactPage from "./ContactPage";
import { useGetContactInfoQuery } from "../../store/api/contactInfo";

const ContactPageContainer = () => {
  const id = useParams().id;
  const { data } = useGetContactInfoQuery(id ? id : "");

  return <ContactPage userInfo={data?.resources[0]}/>;
};

export default ContactPageContainer;
