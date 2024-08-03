import { TagItem } from "../types/types";

export const extractAndMergeTagsArray = (
  oldTags: TagItem[],
  newTags: string[]
) => {
  const extractedTags = oldTags.map((tag) => tag.tag);
  return [...extractedTags, ...newTags];
};
