import React from 'react'
import boozerloco from "../images/boozerloco.jpg"
import { Information } from './Information'

export const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 m-2 mt-4 bg-slate-100 bg-opacity-50'>
                <div className='mx-auto  rounded p-4 m-1'>
                    <div className='text-center font-merri'>
                        <h1 className='text-2xl font-bold underline'>Boozer's Brew & a Cafe Too</h1>
                        <em className='text-xs'>Established 2016</em>
                    </div>
                    <p className='text-md m-2 font-merri'>

                        The idea of Boozer's Brew is simply for our guests to feel like they are at home.  The atmosphere is very relaxed.  A place, where you can go to enjoy a nice conversation, Grab your favorite person to get coffee with and head on over to Boozer's Brew.   Enjoy the view of the beautiful Gulf Coast. Can't make time to come inside?  Please use our Drive-Thru located on the North Side.   We offer a variety of different items.  Breakfast, Lunch, Coffee, Protein Shakes, and so much more.  Hot, made to order breakfast and lunch sandwiches, all day, every day!

                        We hope to see you soon!
                    </p>
                </div>
                <div className='mx-auto  rounded p-4 m-1'>
                    <img className='rounded-3xl object-fill' src={boozerloco} />
                </div>
            </div>
            <Information/>
        </div>

    )
}
