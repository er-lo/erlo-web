const work = [
  { title: "Validations/QMCS Specialist", company: "ALK", time: "May 2023 - Present", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Velit euismod in pellentesque massa placerat duis. Dictumst quisque sagittis purus sit amet volutpat. Risus at ultrices mi tempus imperdiet nulla malesuada. Luctus accumsan tortor posuere ac. Non diam phasellus vestibulum lorem sed risus. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. " },
  { title: "Computer Science Tutor", company: "Oklahoma City Community College", time: "March 2023 - December 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Velit euismod in pellentesque massa placerat duis. Dictumst quisque sagittis purus sit amet volutpat. Risus at ultrices mi tempus imperdiet nulla malesuada. Luctus accumsan tortor posuere ac. Non diam phasellus vestibulum lorem sed risus. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. " },
  { title: "Technical Services Microbiology Specialist", company: "ALK", time: "August 2020 - May 2023", description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Velit euismod in pellentesque massa placerat duis. Dictumst quisque sagittis purus sit amet volutpat. Risus at ultrices mi tempus imperdiet nulla malesuada. Luctus accumsan tortor posuere ac. Non diam phasellus vestibulum lorem sed risus. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. " },
  { title: "Microbiology Team Lead", company: "ALK", time: "June 2019 - August 2020", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum posuere. Velit euismod in pellentesque massa placerat duis. Dictumst quisque sagittis purus sit amet volutpat. Risus at ultrices mi tempus imperdiet nulla malesuada. Luctus accumsan tortor posuere ac. Non diam phasellus vestibulum lorem sed risus. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. " }
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
