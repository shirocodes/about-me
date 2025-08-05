import React, { useRef, useState } from 'react'
import Heading from '../components/Heading'

import emailjs from '@emailjs/browser'
import {motion, AnimatePresence} from 'framer-motion'

const Contacts = () => {
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ... formData, 
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
      e.preventDefault()
      
      setLoading(true)
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        // reset after submission
      setFormData({name:'', email: '', message:'' })
      formRef.current.reset()

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)

      } catch (error) {
        console.log('emailjs Error,', error)
      } finally{
        setLoading(false)
      }
      
  }

  return ( 
    <section id='contact' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <Heading 
          title="Get in touch with me"
          sub='Contact info.'
        />

        <div className='mt-16 grid-12-cols'>
          {/* contact form left side */}
          <div className='xl:col-span-5 backdrop-blur-md rounded-xl shadow-lg'>
            <div className='flex-center card-border rounded-xl p-10'>
              <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' ref={formRef}>
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name='name'
                    required 
                    placeholder="Your name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name='email'
                    required 
                    placeholder="you@example.com"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                   <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea 
                    id="message"
                    name='message' 
                    rows="5"
                    required 
                    placeholder="Your message..."
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <button type='submit' disabled={loading}>
                  <div className='cta-button group'> 
                    <div className='bg-circle'/>
                    <p className='text'>{loading ? 'sending ...': 'Send Message'}</p>
                    <div className='arrow-wrapper'> 
                      <img src='/images/arrow-down.svg' alt='arrow' />
                    </div>
                  </div>
                </button>
              </form>
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-600 font-semibold text-center mt-4"
                  >
                    Message sent successfully!✅
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
          {/* 3d experience right side */}
          <div className='xl:col-span-7 min-h-96'>
            <div className='w-full h-full '>
              {/* <ContactExperience /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts