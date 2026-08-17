const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C#', 'JS/TS', 'Go', 'C++', 'Java', 'HTML'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker / Docker Compose', 'AWS', 'Jenkins', 'Git', 'Postman'],
  },
  {
    label: 'Frameworks',
    items: ['WPF', 'Express', 'Vue', 'Flask', 'Blazor', 'Gin'],
  },
  {
    label: 'Other',
    items: ['Test Automation', 'Linux', 'Embedded Hardware', 'UI/UX'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="skill-items">
              {group.items.map((item) => (
                <span className="skill-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
