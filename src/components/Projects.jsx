const projects = [
  {
    name: "Weatha-Kat",
    subtitle: "Embedded Weather Monitoring Ecosystem",
    bullets: [
      <>
        Designed and built a multi-device <strong>ESP32</strong> ecosystem from
        scratch, comprising an outdoor weather station, an indoor display unit,
        and a minimal gauge - communicating via <strong>MQTT</strong> and HTTP.
      </>,
      <>
        Designed and developed a custom rain detector and weather sensor.
        Publishes environmental readings to an MQTT broker for consumption by
        other devices in the ecosystem.
      </>,
      <>
        Developed a custom non-blocking task scheduler to drive concurrent UI
        rendering, sensor polling, and network communication on{" "}
        <strong>resource-constrained hardware</strong>. Built an interactive
        configuration system using a rotary encoder and pop-up menu UI,
        alongside a 24-hour rain graph and expressive bitmap animations.
      </>,
      <>
        Implemented tear-free offscreen rendering with compile-time selectable
        data sources, enabling the same firmware to target either an MQTT broker
        or HTTP API without runtime overhead.
      </>,
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Personal Projects</h2>
      <div className="card-list">
        {projects.map((project) => (
          <article className="card" key={project.name}>
            <div className="card-header">
              <h3 className="card-title">{project.name}</h3>
            </div>
            <p className="card-subtitle">{project.subtitle}</p>
            <div className="card-body">
              <ul>
                {project.bullets.map((b, i) => (
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
