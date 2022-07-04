import { useEffect } from "react";
import SectionHead from "../SectionHead";
import styles from "./style.module.css";

const Contact = () => {
    const link="https://script.google.com/macros/s/AKfycbyx-8dY3YgsejM8riPQkaqIHGx31JsEMS8nlfNHdu2DO9YT6M-vcgDUk3txtjwGyQOj6Q/exec";
   useEffect(()=>{
        window.addEventListener("load", function() {
            const form = document.getElementById('contact-form');
            form.addEventListener("submit", function(e) {
              e.preventDefault();
              const data = new FormData(form);
              const action = e.target.action;
              fetch(action, {
                method: 'POST',
                body: data,
              })
              .then(() => {
                alert("Success!");
              })
              .catch((e)=>{
                alert(e)
              })
            });
          });
    })
    return(
        <div className={styles.contact}>
            <SectionHead subtitle="Contact" title="Leave Me a Message" text="I am available for hire."/>
            <div className={styles.contactForm}>
            <form id="contact-form" className={styles.form} action={link}>
                <label  className={styles.label}>Name</label>
                <input name="Name" className={styles.input} type="text" placeholder="Name"/>
                <label  className={styles.label}>Contact</label>
                <input name="Contact" className={styles.input} type="text" placeholder="Phone or e-mail"/>
                <label className={styles.label}>Message</label>
                <textarea name="Messages" className={styles.msg} type="text" placeholder="Message"/>
                <button className={styles.btn} type="submit">submit</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;