import { useParams } from "react-router-dom";
import ContactPage from "./ContactPage";
import {
  useAddTagsMutation,
  useGetContactInfoQuery,
} from "../../store/api/contactInfo";
import { extractAndMergeTagsArray } from "../../lib/helper/contactInfoHelper";

const ContactPageContainer = () => {
  const id = useParams().id;
  const { data } = useGetContactInfoQuery(id ? id : "");
  const [addTags, { isLoading }] = useAddTagsMutation();

  const handleAddTags = async (tagsArray: string[]) => {
    if (id && data?.resources[0].tags) {
      const tags = extractAndMergeTagsArray(data?.resources[0].tags, tagsArray);
      await addTags({ tags, id });
    } else {
      console.error("invalid id");
    }
  };

  return (
    <ContactPage
      userInfo={data?.resources[0]}
      addTags={handleAddTags}
      isLoading={isLoading}
    />
  );
};

export default ContactPageContainer;
