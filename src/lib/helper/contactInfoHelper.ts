import { TagItem } from "../types/types";

export const extractAndMergeTagsArray = (
  oldTags: TagItem[],
  newTags: string[]
) => {
  const extractedTags = oldTags.map((tag) => tag.tag);
  const set = new Set ([...extractedTags, ...newTags]);
  return Array.from(set);
};
