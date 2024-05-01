import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProfessional__experienceFields {
  title: EntryFieldTypes.Symbol;
  company: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Symbol;
  startTime: EntryFieldTypes.Date;
  endDate: EntryFieldTypes.Date;
  description: EntryFieldTypes.RichText;
  technologies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeProfessional__experienceSkeleton = EntrySkeletonType<
  TypeProfessional__experienceFields,
  "professional-experience"
>;
export type TypeProfessional__experience<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProfessional__experienceSkeleton, Modifiers, Locales>;
