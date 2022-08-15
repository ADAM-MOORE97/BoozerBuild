import React from 'react'

export const Information = () => {
  return (
    <div>
         <div className='m-2 mt-4 bg-stone-600 bg-opacity-50 font-merri p-4'>
                <h2 className='text-2xl text-center underline text-boozerblue mt-2'>Locations & Hours</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 m-2'>
                    <div className='p-4 m-1 '>
                        <h3 className='text-center text-md md:text-lg  text-boozerblue'>802 E Pass Road, Gulfport Mississippi 39501</h3>
                        <iframe className='w-full rounded-3xl object-fill mx-auto mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.381613985856!2d-89.03756568487657!3d30.396912981755474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c16dd3a8307bb%3A0xc12594a38f302bd8!2s802%20E%20Pass%20Rd%2C%20Gulfport%2C%20MS%2039501!5e0!3m2!1sen!2sus!4v1660502769726!5m2!1sen!2sus" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <br></br>
                        <h3 className='text-center text-md md:text-lg  text-boozerblue'>1921 15th Street, Gulfport, Mississippi 39501</h3>
                        <iframe className='w-full rounded-3xl object-fill mx-auto mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.363315520978!2d-89.08800878585392!3d30.369039610122318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c17dca0ff3aed%3A0x5a642b8656ab1218!2s1921%2015th%20St%2C%20Gulfport%2C%20MS%2039501!5e0!3m2!1sen!2sus!4v1660503662032!5m2!1sen!2sus" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='p-4 m-1 text-xl text-center md:text-2xl border-dashed border-boozerblue border-2'>
                        <h3 className=' text-boozerblue w-3/4 mx-auto mb-1 '>Monday - Friday</h3>
                        <h4 className=' text-boozerblue mx-auto'>6am to 4pm</h4>
                        <br></br>
                        <h3 className=' text-boozerblue w-3/4 mx-auto mb-1'>Saturday</h3>
                        <h4 className=' text-boozerblue mx-auto'>7am to 2pm</h4>
                        <br></br>
                        <h5 className=' text-boozerblue w-3/4 mx-auto'>Drive-Thru available!</h5>
                    </div>
                </div>


            </div>
            <div className='m-2 p-4 mt-4 bg-slate-100 bg-opacity-50 font-merri text-center '>
                <h5 className='text-2xl'>Call us and we'll have your order ready!</h5>
                <a href="tel:+1-228-234-5282"><h6 className='text-3xl'><i className="fa-solid fa-phone "></i>  228-234-JAVA </h6></a>

            </div>
    </div>
  )
}
{/* <div>
<div className={flipCss?'m-2 mt-4 bg-slate-100 bg-opacity-50 font-merri p-4':'m-2 mt-4 bg-stone-600 bg-opacity-50 font-merri p-4'}>
       <h2 className={flipCss?'text-2xl text-center underline text-stone-600 mt-2':'text-2xl text-center underline text-boozerblue mt-2'}>Locations & Hours</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 m-2'>
           <div className='p-4 m-1 '>
               <h3 className={flipCss?'text-center text-md md:text-lg  text-stone-600':'text-center text-md md:text-lg  text-boozerblue'}>802 E Pass Road, Gulfport Mississippi 39501</h3>
               <iframe className='w-full rounded-3xl object-fill mx-auto mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.381613985856!2d-89.03756568487657!3d30.396912981755474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c16dd3a8307bb%3A0xc12594a38f302bd8!2s802%20E%20Pass%20Rd%2C%20Gulfport%2C%20MS%2039501!5e0!3m2!1sen!2sus!4v1660502769726!5m2!1sen!2sus" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               <br></br>
               <h3 className={flipCss?'text-center text-md md:text-lg  text-stone-600':'text-center text-md md:text-lg  text-boozerblue'}>1921 15th Street, Gulfport, Mississippi 39501</h3>
               <iframe className='w-full rounded-3xl object-fill mx-auto mt-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.363315520978!2d-89.08800878585392!3d30.369039610122318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c17dca0ff3aed%3A0x5a642b8656ab1218!2s1921%2015th%20St%2C%20Gulfport%2C%20MS%2039501!5e0!3m2!1sen!2sus!4v1660503662032!5m2!1sen!2sus" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
           <div className={flipCss?'p-4 m-1 text-xl text-center md:text-2xl border-dashed border-stone-600 border-2':'p-4 m-1 text-xl text-center md:text-2xl border-dashed border-boozerblue border-2'}>
               <h3 className={flipCss?' text-stone-600 w-3/4 mx-auto mb-1 ':' text-boozerblue w-3/4 mx-auto mb-1 '}>Monday - Friday</h3>
               <h4 className={flipCss?' text-stone-600 mx-auto':' text-boozerblue mx-auto'}>6am to 4pm</h4>
               <br></br>
               <h3 className={flipCss?' text-stone-600 w-3/4 mx-auto mb-1 ':' text-boozerblue w-3/4 mx-auto mb-1 '}>Saturday</h3>
               <h4 className={flipCss?' text-stone-600 mx-auto':' text-boozerblue mx-auto'}>7am to 2pm</h4>
               <br></br>
               <h5 className={flipCss?' text-stone-600 w-3/4 mx-auto':' text-boozerblue w-3/4 mx-auto'}>Drive-Thru available!</h5>
           </div>
       </div>


   </div>
   <div className={flipCss?'m-2 p-4 mt-4 bg-stone-600 bg-opacity-50 font-merri text-center text-boozerblue':'m-2 p-4 mt-4 bg-slate-100 bg-opacity-50 font-merri text-center '}>
       <h5 className='text-2xl'>Call us and we'll have your order ready!</h5>
       <a href="tel:+1-228-234-5282"><h6 className='text-3xl'><i className="fa-solid fa-phone "></i>  228-234-JAVA </h6></a>

   </div>
</div> */}