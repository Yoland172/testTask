import { TagItem } from "../../types/types";
import { extractAndMergeTagsArray } from "../contactInfoHelper";


describe('extractAndMergeTagsArray', () => {
  test('merges old tag items and new tags into a single array', () => {
    const oldTags = [{ id: '1', tag: 'React' }, { id: '2', tag: 'Node' }];
    const newTags = ['JavaScript', 'TypeScript'];

    const mergedTags = extractAndMergeTagsArray(oldTags, newTags);

    expect(mergedTags).toEqual(['React', 'Node', 'JavaScript', 'TypeScript']);
  });

  test('handles empty old tags array correctly', () => {
    const oldTags:TagItem[] = [];
    const newTags = ['JavaScript', 'TypeScript'];

    const mergedTags = extractAndMergeTagsArray(oldTags, newTags);

    expect(mergedTags).toEqual(['JavaScript', 'TypeScript']);
  });

  test('handles empty new tags array correctly', () => {
    const oldTags = [{ id: '1', tag: 'React' }, { id: '2', tag: 'Node' }];
    const newTags:string[] = [];

    const mergedTags = extractAndMergeTagsArray(oldTags, newTags);

    expect(mergedTags).toEqual(['React', 'Node']);
  });

  test('returns an empty array when both old tags and new tags are empty', () => {
    const oldTags:TagItem[] = [];
    const newTags:string[] = [];

    const mergedTags = extractAndMergeTagsArray(oldTags, newTags);

    expect(mergedTags).toEqual([]);
  });

  test('does not include duplicates if new tags overlap with old tags', () => {
    const oldTags = [{ id: '1', tag: 'React' }];
    const newTags = ['React', 'Node'];

    const mergedTags = extractAndMergeTagsArray(oldTags, newTags);

    expect(mergedTags).toEqual(['React', 'Node']);
  });
});
