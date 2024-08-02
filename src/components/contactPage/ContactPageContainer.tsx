import { useParams } from "react-router-dom"
import ContactPage from "./ContactPage"
import { useEffect } from "react";

const ContactPageContainer = () => {
    const id = useParams().id;

    useEffect(() => {
        console.log(id);
    },[id])


  return (
    <ContactPage/>
  )
}

export default ContactPageContainer
