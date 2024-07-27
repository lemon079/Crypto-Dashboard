import React from 'react'
import './Support.css'
import { IoMdMail } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import Input from '../Input';

const Card = ({ title = '', text = '', icon: Icon }) => {
    return (
        <>
            <section className='space-y-2'>
                <Icon className={'text-customPurple800 text-2xl'} />
                <h2 className='text-3xl font-semibold'>{title}</h2>
                <p className='font-semibold'>{text}</p>
            </section>
        </>
    )
}

const Textarea = () => {
    return (
        <div className='space-y-2'>
            <label htmlFor="message" className='font-semibold'>Message</label>
            <textarea name="message" id="message" placeholder='Your Message' className='px-3'></textarea>
        </div>
    )
}


const Support = () => {
    return (
        <section className='hero-container'>
            <section className="contact-form-container">
                <Card title='Contact Us' text='Have a question or just want to know more? Feel free to reach out to us.' icon={IoMdMail} />

                <section className="form-box">
                    <h2>You will receive response within 24 hours of time of submit.</h2>
                    <form className='space-y-4'>
                        <div className='flex gap-2'>
                            <Input text='Name' type='text' id='name' placeholder='James' />
                            <Input text='Surname' type='text' id='surname' placeholder='Arthur' />
                        </div>

                        <Input text='Email' type='email' id='email' placeholder='name@mail.com' />

                        <Textarea />

                    </form>
                </section>
            </section>
            <section className="live-chat-container">
                <Card title='Live Chat' text='Don’t have time to wait for the answer? Chat with us now.' icon={BiSolidMessageRounded} />

                <div className='chat-box'>
                    <h2>Chatbot</h2>
                    <p>Chat with us now</p>
                </div>
            </section>
        </section>
    )
}

export default Support