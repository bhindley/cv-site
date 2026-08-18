const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "Manchester Metropolitan University",
    location: "Manchester, UK",
    date: "Sep. 2022 – Jul. 2025",
  },
];

export default function Education() {
  return (
    <section id="education">
      <h2 className="section-title">Education &amp; Training</h2>
      <div className="card-list">
        {education.map((entry) => (
          <article className="card" key={entry.degree}>
            <div className="card-header">
              <h3 className="card-title">{entry.institution}</h3>
              <span className="card-date">{entry.date}</span>
            </div>
            <div className="card-subtitle-row">
              <span className="card-subtitle">{entry.degree}</span>
              <span className="card-location">{entry.location}</span>
            </div>
            {entry.bullets && entry.bullets.length > 0 && (
              <div className="card-body">
                <ul>
                  {entry.bullets.map((b, i) => (
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
