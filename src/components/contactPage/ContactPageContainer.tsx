import { useParams } from "react-router-dom";
import ContactPage from "./ContactPage";
import {
  useAddTagsMutation,
  useGetContactInfoQuery,
} from "../../store/api/contactInfo";
import { extractAndMergeTagsArray } from "../../lib/helper/contactInfoHelper";
import { useEffect, useState } from "react";
import { ContactItemType } from "../../lib/types/types";
import { transformApiData } from "../../lib/helper/transformApiDataHelper";
import { toast } from "react-toastify";

const ContactPageContainer = () => {
  const [contactsState, setContactsState] = useState<ContactItemType[]>([]);

  const id = useParams().id;
  const { data, isError: getError } = useGetContactInfoQuery(id ? id : "");
  const [addTags, { isLoading, isError: addError }] = useAddTagsMutation();

  const handleAddTags = async (tagsArray: string[]) => {
    if (id && data?.resources[0].tags) {
      const tags = extractAndMergeTagsArray(data?.resources[0].tags, tagsArray);
      await addTags({ tags, id });
    } else {
      console.error("invalid id");
    }
  };

  useEffect(() => {
    if (getError || addError) {
      toast.error("Ooops something went wrong. We are putting of the fire 🔥", {
        position: "bottom-right",
        className: "toast",
        progressClassName: "toastPropgressBar",
      });
    }
  }, [getError, addError]);

  useEffect(() => {
    if (data) {
      setContactsState(transformApiData(data.resources));
    }
  }, [data]);

  return (
    <ContactPage
      userInfo={contactsState[0]}
      addTags={handleAddTags}
      isLoading={isLoading}
    />
  );
};

export default ContactPageContainer;
