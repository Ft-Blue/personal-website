import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeSide__projectFields {
  projectName: EntryFieldTypes.Symbol;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  repositoryUrl: EntryFieldTypes.Symbol;
  demoUrl?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeSide__projectSkeleton = EntrySkeletonType<
  TypeSide__projectFields,
  "side-project"
>;
export type TypeSide__project<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSide__projectSkeleton, Modifiers, Locales>;
