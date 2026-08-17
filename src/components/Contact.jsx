import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus('sending');

    fetch('https://formspree.io/f/placeholder', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setStatus('sent');
          form.reset();
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }

  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="contact-intro">
        Get in touch via the form below or connect on{' '}
        <a href="https://www.linkedin.com/in/benjamin-hindley-b07b95253" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>

      {status === 'sent' ? (
        <p className="contact-success">Message sent. I will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Your message..."
              required
            />
          </div>
          {status === 'error' && (
            <p className="contact-error">Something went wrong. Please try again.</p>
          )}
          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </form>
      )}
    </section>
  );
}
