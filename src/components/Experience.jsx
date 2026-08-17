const jobs = [
  {
    title: 'Software Engineering Professional',
    company: 'BT Group',
    location: 'Manchester, UK',
    date: 'Sep. 2025 – Present',
  },
  {
    title: 'Summer Intern',
    company: 'BT Group',
    location: 'Cheltenham, UK',
    date: 'Jun. – Sep. 2024',
  },
  {
    title: 'Sales Assistant',
    company: 'Fjällräven',
    location: 'Manchester, UK',
    date: 'PT, Oct. 2024 – Sep. 2025',
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
            {job.bullets && job.bullets.length > 0 && (
              <div className="card-body">
                <ul>
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
