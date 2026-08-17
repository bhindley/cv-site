const jobs = [
  {
    title: 'Software Engineering Professional',
    company: 'BT Group',
    location: 'Manchester, UK',
    date: 'Sep. 2025 – Present',
    bullets: [
      <>Built the MVP for an internal data presentation and management application, replacing a manual solution and <strong>reducing time needed to access the data from minutes to seconds</strong>. Includes design work pertaining to UI/UX and architecture. Developed across the <strong>full stack</strong> using WPF / C# and Node.js / Express. Integrated CI/CD solutions into the workflow using Docker and Postman. Took significant ownership of delivery.</>,
      <>Worked on a generalised testing automation framework in a strictly agile environment. <strong>Proactively addressed tech-debt</strong> – for example, consolidated a dual-endpoint backend (one by name, one by ID) into a single ID-based system, <strong>eliminating persistent issues</strong> with encryption and project renaming. Developed using Python and Jinja. Used Jenkins and AWS to support automated testing workflows, CI/CD processes, and development environments / platforms.</>,
      <>Supported two summer interns on an <strong>embedded systems</strong> project. Took responsibility for onboarding the students onto the project. Handled <strong>project management</strong> and created an agile working environment using elements of Scrum and Kanban. Used Gitlab Issues to facilitate agile processes such as issue management, and to aid in hosting sprint retrospectives and planning sessions.</>,
    ],
  },
  {
    title: 'Summer Intern',
    company: 'BT Group',
    location: 'Cheltenham, UK',
    date: 'Jun. – Sep. 2024',
    bullets: [
      <>Delivered a proof-of-concept for an internal &lsquo;knowledge pot&rsquo; application during a 10-week placement, leading to the project being <strong>approved for further development</strong>.</>,
      <><strong>Liaised with stakeholders</strong> and end-users to elicit requirements. Worked on <strong>product design</strong>, full-stack development, and <strong>deployment</strong> considerations.</>,
    ],
  },
  {
    title: 'Sales Assistant',
    company: 'Fjällräven',
    location: 'Manchester, UK',
    date: 'PT, Oct. 2024 – Sep. 2025',
    bullets: [
      <>Acted as an SME for technical outdoor clothing by researching the brand&rsquo;s products and their specifications to direct customers to the correct investment piece, driving sales and customer satisfaction.</>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="card-list">
        {jobs.map((job) => (
          <article className="card" key={`${job.company}-${job.title}`}>
            <div className="card-header">
              <h3 className="card-title">{job.title}</h3>
              <span className="card-date">{job.date}</span>
            </div>
            <div className="card-subtitle-row">
              <span className="card-subtitle">{job.company}</span>
              <span className="card-location">{job.location}</span>
            </div>
            <div className="card-body">
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
