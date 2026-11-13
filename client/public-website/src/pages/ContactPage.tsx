import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../components/ui/button'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.string().trim().email('Enter a valid email address.').max(254),
  topic: z.enum(['general', 'services', 'partnership', 'volunteering']),
  message: z.string().trim().min(10, 'Please add a little more detail.').max(1200),
})

type EnquiryValues = z.infer<typeof enquirySchema>

function ContactPage() {
  const [previewSubmitted, setPreviewSubmitted] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { topic: 'general' },
  })

  const onSubmit = (_values: EnquiryValues) => {
    setPreviewSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label"><span className="section-label__line" /><span>Contact</span></div>
          <h1>We’re here to <em>listen.</em></h1>
          <p>Have a question or want to learn more? Start a conversation with the team.</p>
        </div>
      </section>
      <section className="contact-content section-space">
        <div className="container contact-content__grid">
          <div className="contact-details">
            <h2>Let’s start with a conversation.</h2>
            <p>Current contact details are being confirmed. This preview form does not send or store messages.</p>
            <div className="contact-detail">
              <span><MapPin aria-hidden="true" size={18} /></span>
              <div><strong>Visit the centre</strong><small>Address pending confirmation</small></div>
            </div>
            <div className="contact-detail">
              <span><Phone aria-hidden="true" size={18} /></span>
              <div><strong>Call the team</strong><small>Telephone pending confirmation</small></div>
            </div>
            <div className="contact-detail">
              <span><Mail aria-hidden="true" size={18} /></span>
              <div><strong>Send an email</strong><small>Email address pending confirmation</small></div>
            </div>
            <div className="contact-safeguarding">
              <strong>A note about privacy</strong>
              <p>Please don’t include a child’s diagnosis, medical history, or other sensitive details in this preview form.</p>
            </div>
          </div>

          <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__heading">
              <span className="contact-form__step">01 / SAY HELLO</span>
              <h2>What would you like to talk about?</h2>
            </div>
            <label className="form-field">
              <span>Your name</span>
              <input autoComplete="name" {...register('name')} aria-invalid={Boolean(errors.name)} />
              {errors.name && <span className="form-error">{errors.name.message}</span>}
            </label>
            <label className="form-field">
              <span>Email address</span>
              <input autoComplete="email" type="email" {...register('email')} aria-invalid={Boolean(errors.email)} />
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </label>
            <label className="form-field">
              <span>What is your message about?</span>
              <select {...register('topic')}>
                <option value="general">A general question</option>
                <option value="services">Services & programmes</option>
                <option value="partnership">Partnership</option>
                <option value="volunteering">Volunteering</option>
              </select>
            </label>
            <label className="form-field">
              <span>Your message</span>
              <textarea rows={4} {...register('message')} aria-invalid={Boolean(errors.message)} />
              {errors.message && <span className="form-error">{errors.message.message}</span>}
            </label>
            <p className="form-privacy">
              This is a frontend-only preview. Submitting validates the form in
              your browser; no message is transmitted or saved.
            </p>
            <Button type="submit" size="large">
              Preview message <ArrowRight aria-hidden="true" size={17} />
            </Button>
            {previewSubmitted && (
              <p className="form-status" role="status">
                Preview only — your message was not sent. An approved contact
                service must be connected before launch.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
