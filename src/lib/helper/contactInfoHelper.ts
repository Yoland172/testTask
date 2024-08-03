import { TagItem } from "../types/types";

export const extractAndMergeTagsArray = (
  oldTags: TagItem[],
  newTags: string[]
) => {
  if (oldTags.length > 0) {
    const extarctedTags = oldTags.map((el) => {
      return el.tag;
    });
    return extarctedTags.concat(newTags);
  } else {
    return newTags;
  }
};
