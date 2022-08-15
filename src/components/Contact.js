import React from 'react'
import { Information } from './Information'

export const Contact = () => {
    return (
        <div>
            <div className='p-4 m-2 mt-4 bg-slate-100 bg-opacity-50 font-merri'>

                <div className='border-stone-600 border-dashed border-2 p-4'>
                    <h1 className='text-center font-elite font-bold text-3xl underline mb-4'>Get In Touch</h1>
                    <form className=''>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Your Name</label>

                            <input className='bg-stone-600 bg-opacity-50 placeholder-boozerblue' type="text" name="name" placeholder='John Coffee' />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Email Address</label>
                            <input className='bg-stone-600 bg-opacity-50 placeholder-boozerblue' type="email" name="email" placeholder='john.coffee@example.com' />
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'> Message </label>
                            <textarea className='bg-stone-600 bg-opacity-50 placeholder-boozerblue' name="message" rows="3" placeholder='Dear Boozers Brew....'></textarea>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <button className='text-xl bg-stone-600 md:w-1/4 mx-auto text-boozerblue rounded p-2' type="submit">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
            <Information />
        </div>
    )
}
