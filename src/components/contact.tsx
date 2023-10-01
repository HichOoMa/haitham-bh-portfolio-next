// import './contact.css'
const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <span className="section-title">CONTACT</span>
      <form className="contact-container">
        <div className="field">
          <span className='contact-label'>Name</span>
          <input type="email" name='email' className="contact-input" placeholder='Enter Your Name'/>
        </div>
        <div className="field">
          <span className='contact-label'>Email</span>
          <input type="email" name="object" className="contact-input" placeholder='Enter Your Email'/>
        </div>
        <div className="field">
          <span className='contact-label'>Message</span>
          <textarea className="contact-input" rows={10} placeholder='Enter Your Message'/>
        </div>
        <button className='contact-submit'>SUBMIT</button>
      </form>
    </section>
  )
}
export default Contact;