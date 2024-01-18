const work = [
  { title: "Validations/QMCS Specialist", company: "ALK", time: "May 2023 - Present", description: "In this role, I am responsible for the quality management of computerized systems. I draft and release software validation protocols and any technicial documents for computerized systems/equipment in accordance with federal regulations. I also work closely with managers from other departments to ensure gaps in technical documents are corrected. " },
  { title: "Computer Science Tutor", company: "Oklahoma City Community College", time: "March 2023 - December 2023", description: "Assisted students with homework, projects and test preparation. Worked one on one with students to help them understand key concepts and complex problems from the courses. Tutored students in Visual Basic, C++, and Java." },
  { title: "Technical Services Microbiology Specialist", company: "ALK", time: "August 2020 - May 2023", description: "I drafted and released equipment validation protocols and technicial documents for equipment in accordance with federal regulations. I worked in a project setting where my manager and I would set deadlines for myself on the equipment I worked on. I assisted with internal and external audits." },
  { title: "Microbiology Team Lead", company: "ALK", time: "June 2019 - August 2020", description: "As team lead, I was in charge of a group of three microbiologists. I was in charge of creating schedules for laboratory tests and personnel. I was in charge of researching methods to advance test efficiency and cut down turn around times for product release." }
];
export default function Work() {
  return (
    <div className="px-6 md:px-6 mx-auto">
      <div className="flex flex-col">
        <div className="flex animate-in flex-col gap-8">
          <ul className="flex flex-col">
            {work.map((work) => (
              <li key={work.title}>
                <h1 className="mb-1 text-md md:text-lg">
                  <svg className="inline-block align-baseline fill-current" width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="4"></circle></svg>
                  <span className="ml-2">
                    <span className="font-bold">
                      {work.company} 
                    </span>
                    <span> / </span>
                    {work.title}
                  </span>
                </h1>
                <div className="border border-gray-500 border-r-0 border-t-0 border-b-0 pl-4 ml-1 mb-6">
                  <p className="mb-2 uppercase tracking-wider text-sm text-gray-600 font-semibold">
                    {work.time}
                  </p>
                  <p className="text-sm md:text-md">{work.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  )
}
