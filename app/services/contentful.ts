import { createClient, Entry, EntrySkeletonType } from "contentful";

export const getEntryById = <T extends EntrySkeletonType>(
  entryId: string,
): Promise<Entry<T, undefined>> => {
  const contenfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    host: "cdn.contentful.com",
  });

  return contenfulClient.getEntry<T>(entryId);
};
