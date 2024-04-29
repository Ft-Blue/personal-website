import { Experience } from "./types";

export const fetchExperiences = (): Experience[] => {
  return [
    {
      title: "Tech Lead",
      company: "Funecap",
      location: "Paris, France",
      startDate: "October 2023",
      endDate: "Present",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Symfony",
        "MariaDB",
        "AWS",
        "Docker",
        "Gitlab",
      ],
      description: FunecapDescription,
    },
    {
      title: "Tech Lead",
      company: "Bpifrance",
      location: "Paris, France",
      startDate: "August 2022",
      endDate: "October 2023",
      technologies: [
        "Angular",
        "TypeScript",
        "Spring Boot",
        "Camunda",
        "PostgreSQL",
        "Python",
        "Docker",
        "Gitlab",
      ],
      description: BpifranceDescription,
    },
  ];
};

const FunecapDescription = (
  <>
    <p>Migrating the old company&apos;s website from Wordpress to Next.js</p>
    <ol className="list-disc">
      <li>Managing a team of 3 developers</li>
      <li>Writing the technical specs of the developed features</li>
      <li>Improving the legacy base while reusing old code</li>
      <li>
        Working with IT Operations to migrate to AWS and enhancing the Developer
        Experience
      </li>
    </ol>
  </>
);

const BpifranceDescription = (
  <>
    <p>Developing an online loans platform for entrepreneurs.</p>
    <ol className="list-disc">
      <li>
        Reducing the time necessary to create a new platform by a factor of 5
      </li>
      <li>
        Developing new features to enhance the user experience and make the
        process faster
      </li>
      <li>
        Working the Customer Support to reduce the time necessary to close user
        requests.
      </li>
    </ol>
  </>
);
