export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          Software Engineer building internal tools that replace manual processes and reduce operational overhead.
          Experienced in delivering full-stack web applications, test automation frameworks, and embedded IoT solutions.
          Hands-on project experience across backend services, frontend applications, embedded systems, and CI/CD solutions.
        </p>
        <div className="about-divider" aria-hidden="true" />
        <div className="about-photo-wrap">
          <img
            src="/me.jpg"
            alt="Ben Hindley"
            className="about-photo"
          />
        </div>
      </div>
    </section>
  );
}
