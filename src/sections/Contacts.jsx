import { useRef, useState } from 'react'
import Heading from '../components/Heading'
import {motion, AnimatePresence} from 'framer-motion'
import LightParticlesBackground from '../components/ParticlesBackgrnd.jsx'


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
        const emailjs = await import('@emailjs/browser'); // dynamically import to lazy load it
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
    <section id='contact' className='relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden'>
      <LightParticlesBackground/>
      <div className='z-10 w-full max-w-xl px-5'>
        <Heading 
          title="Get in touch with me"
          // sub='Contact info.'
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10  bg-white/10 rounded-xl shadow-xl p-8"
        >
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
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contacts