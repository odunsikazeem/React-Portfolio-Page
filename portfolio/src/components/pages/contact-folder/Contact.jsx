import React,{useRef, useState} from 'react'
import  "./style.css"
import emailjs from "@emailjs/browser"




function Contact() {

const [ResponseText, setResponseText]=useState (" ")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p3hvjz6', 'template_nacdham', form.current, {
        publicKey: '68lF4grWoT6CJYyeV',
      })
      .then(
        () => {
          setResponseText("Submitted")
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      <p>{ResponseText}</p>
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
      
      <input type="text" name="from_name" placeholder='Type Name'/>
      <br/>
      
      <input type="email" name="from_email" placeholder='Type Email'/>
      <br/>
      
      <textarea name="message" placeholder='Your Message here ...'/>
      <br/>
      {/* <input type="submit" value="Send" /> */}
      <button>Submit</button>
    </form>
    </div>
  )
}

export default Contact;
