import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { Button } from '../components/ui/button'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100),
  email: z.string().trim().email('Enter a valid email address.').max(254),
  topic: z.enum(['general', 'services', 'enrolment', 'partnership', 'volunteering']),
  message: z.string().trim().min(10, 'Please add a little more detail.').max(1200),
})

type EnquiryValues = z.infer<typeof enquirySchema>

function ContactPage() {
  const [previewSubmitted, setPreviewSubmitted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const [searchParams] = useSearchParams()
  const serviceTitle = searchParams.get('service')?.slice(0, 100)
  const requestedTopic = searchParams.get('topic')
  const defaultTopic: EnquiryValues['topic'] =
    requestedTopic === 'services' ||
    requestedTopic === 'enrolment' ||
    requestedTopic === 'partnership' ||
    requestedTopic === 'volunteering'
      ? requestedTopic
      : 'general'
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      topic: defaultTopic,
      message: serviceTitle ? `I’d like to ask about ${serviceTitle}.` : '',
    },
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
          <motion.div
            className="contact-details"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .4 }}
          >
            <h2>Let’s start with a conversation.</h2>
            <p>These details are listed on Tunaweza&apos;s existing website and should be reconfirmed before launch. This preview form does not send or store messages.</p>
            <div className="contact-detail">
              <span><MapPin aria-hidden="true" size={18} /></span>
              <div><strong>Visit the centre</strong><small>Plot 1211 Papaya Rise, Kampala, Uganda</small></div>
            </div>
            <div className="contact-detail">
              <span><Phone aria-hidden="true" size={18} /></span>
              <div>
                <strong>Call the team</strong>
                <small><a href="tel:+256787197884">+256 787 197884</a> <span aria-hidden="true">|</span> <a href="tel:+256752600196">+256 752 600196</a></small>
              </div>
            </div>
            <div className="contact-detail">
              <span><Mail aria-hidden="true" size={18} /></span>
              <div><strong>Send an email</strong><small>info@tunaweza.co.ug</small></div>
            </div>
            <div className="contact-safeguarding">
              <strong>A note about privacy</strong>
              <p>Please don’t include a child’s diagnosis, medical history, or other sensitive details in this preview form.</p>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : .4, delay: prefersReducedMotion ? 0 : .08 }}
          >
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
                <option value="enrolment">Enrolment information</option>
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
          </motion.form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
