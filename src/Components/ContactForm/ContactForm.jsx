import React from 'react'
import Button from '../Button/Button'
import styles from "./ContactForm.module.css"
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA CHAT SUPPORT" icon={<MdOutlineMessage />}
                    />
                    <Button
                        text="VIA CALL" icon={<MdCall />}
                    />

                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM" icon={<MdOutlineMessage />}
                />

                <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>

                
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-Mail</label>
                        <input type="text" name='email' />
                    </div>

                
                    <div className={styles.form_control}>
                        <label htmlFor="Tect">TEXT</label>
                        <textarea name="text" rows={8}></textarea>
                    </div>
                    <div
                    style={{
                       display:"flex",
                       justifyContent:'end',

                    }}>
                        <Button
                        text="SUBMIT"
                    />
                    </div>
                    
                   
                </form>
                

            </div>
            <div className={styles.image1}>
                <img src="./service.svg" alt="logo" />

            </div>
        </section>
    )
}

export default ContactForm
