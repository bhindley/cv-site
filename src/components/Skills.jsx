const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C#', 'JavaScript', 'TypeScript', 'Go', 'C++', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'DevOps & Tools',
    items: ['Docker', 'AWS', 'Jenkins', 'Git', 'Postman'],
  },
  {
    label: 'Frontend Frameworks',
    items: ['WPF', 'Vue', 'React', 'Blazor'],
  },
  {
    label: 'Backend Frameworks',
    items: ['Node.js', 'Express', 'Gin', 'Flask', 'ASP.NET Core'],
  },
  {
    label: 'Embedded, IoT & Telemetry',
    items: ['ESP32', 'Arduino', 'Raspberry Pi', 'Embedded C++', 'MQTT', 'I2C', 'SPI'],
  },
  {
    label: 'General Skills',
    items: ['Project Management', 'Scrum', 'Test Automation', 'Linux', 'UI/UX'],
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
