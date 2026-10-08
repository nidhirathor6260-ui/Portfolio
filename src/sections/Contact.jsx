import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import SocialLinks from '../components/SocialLinks';
import { contactConfig, site } from '../data/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Enter your name (at least 2 characters).';
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Enter a valid email address, like name@example.com.';
  if (values.message.trim().length < 10) errors.message = 'Write at least 10 characters so I know how to help.';
  return errors;
}

function getProvider() {
  if (contactConfig.formspreeEndpoint) return 'formspree';
  const { serviceId, templateId, publicKey } = contactConfig.emailjs;
  if (serviceId && templateId && publicKey) return 'emailjs';
  return null; // nothing configured: fall back to the visitor's email app
}

const STATUS_TEXT = {
  success: "Message sent. Thanks, I'll get back to you soon.",
  error: `The message could not be sent. Please try again, or email ${site.email} directly.`,
  mailto: 'Opening your email app with your message filled in. Nothing has been sent yet.',
};

export default function Contact() {
  const provider = getProvider();
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' }); // `company` is a honeypot
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | mailto

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    const problem = validate(values)[name];
    setErrors((prev) => ({ ...prev, [name]: problem }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.company) return; // bots fill hidden fields; humans never see it

    const found = validate(values);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    const payload = { name: values.name.trim(), email: values.email.trim(), message: values.message.trim() };

    if (!provider) {
      const subject = encodeURIComponent(`Portfolio message from ${payload.name}`);
      const body = encodeURIComponent(`${payload.message}\n\n${payload.name}\n${payload.email}`);
      setStatus('mailto');
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      let res;
      if (provider === 'formspree') {
        res = await fetch(contactConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        const { serviceId, templateId, publicKey } = contactConfig.emailjs;
        res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: { from_name: payload.name, reply_to: payload.email, message: payload.message },
          }),
        });
      }
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus('success');
      setValues({ name: '', email: '', message: '', company: '' });
    } catch {
      setStatus('error');
    }
  };

  const field = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] ? 'true' : 'false',
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  const sending = status === 'sending';

  return (
    <section id="contact" data-section="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle id="contact-title" title="Contact">
          Open to internships, SDE roles, full-stack opportunities, open-source work and hackathon teams. Send a note
          and I'll reply.
        </SectionTitle>

        <div className="contact">
          <Reveal className="contact__info">
            <ul className="contact__list">
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="contact__label">Location</span>
                  <span>{site.location}</span>
                </div>
              </li>
            </ul>
            <SocialLinks />
          </Reveal>

          <Reveal className="contact__form-wrap" delay={0.08}>
            <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="form__row">
                <label htmlFor="contact-name">Name</label>
                <input type="text" autoComplete="name" required {...field('name')} />
                {errors.name ? (
                  <p id="contact-name-error" className="form__error">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="form__row">
                <label htmlFor="contact-email">Email</label>
                <input type="email" autoComplete="email" inputMode="email" required {...field('email')} />
                {errors.email ? (
                  <p id="contact-email-error" className="form__error">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="form__row">
                <label htmlFor="contact-message">Message</label>
                <textarea rows={5} required {...field('message')} />
                {errors.message ? (
                  <p id="contact-message-error" className="form__error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {/* Honeypot: hidden from people and assistive tech */}
              <div className="form__trap" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={onChange}
                />
              </div>

              <div className="form__footer">
                <Button
                  type="submit"
                  icon={Send}
                  disabled={sending}
                  onClick={undefined}
                  className="form__submit"
                >
                  {sending ? 'Sending…' : provider ? 'Send message' : 'Compose in email app'}
                </Button>
                {/* {!provider ? (
                  <p className="form__hint">
                    This form isn't connected to an email service yet, so it opens your email app with your message
                    filled in instead of sending it.
                  </p>
                ) : null} */}
              </div>

              <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
                {STATUS_TEXT[status] || ''}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
