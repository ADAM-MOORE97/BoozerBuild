import React from 'react'
import { Information } from './Information'

export const Career = () => {

    return (
        <div>
            <div className='p-4 m-2 mt-4 bg-slate-100 bg-opacity-50 font-merri'>
                <div className='p-4 text-xl text-center border-y-2 border-stone-600 border-dashed'>
                    <h1 className='text-3xl underline font-bold'>Potential Team Members</h1>
                    <p className='mb-2'>At Boozer's, we believe in providing superior service and the best cup of coffee for the Gulf Coast.</p>
                    <p>We are always looking for good people to join our team! If you are high-energy, like to work, and can provide the best customer service this might be the place for you!!!!</p>
                    <p className='mb-2 mt-2'>** We do not hire for seasonal positions (holiday or summer work) **</p>
                    <p>We are always accepting applications- 17 years and older.  Must have reliable transportation.  We are looking for Long Term Employees</p>
                    <p className='mt-4'>Must have flexible work hours, including Saturdays</p>
                    <p className='mt-4 font-bold'>Boozer's Brew Hours</p>
                    <em className='font-bold'>Monday-Friday 6am-4pm & Saturdays 7am-2pm</em>
                    <h2 className='mt-4 bg-stone-600 md:w-1/2 mx-auto text-boozerblue text-2xl font-bold'>Responsibilities</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <ul className='mt-2 text-justify list-disc p-4 m-1'>
                            <li>Greet customers in a friendly manner</li>
                            <li>Accurately take and fulfill customer orders</li>
                            <li>Create and Maintain a welcoming environment</li>
                            <li>Communicate effectively with team members</li>
                            <li>Respond to customer questions and concerns</li>
                            <li>Keep front and back clean and stocked</li>
                            <li>Learn Full Menu-drinks and food</li>
                            <li>Restock retail items</li>
                            <li>Do dishes</li>
                            <li>​Quick learner</li>
                        </ul>

                        <ul className='mt-2 text-justify list-disc p-4 m-1'>
                            <li>Receive Inventory and let management know when items are low on stock</li>
                            <li>​Be Punctual</li>
                            <li>Work well with others, everyone must work together!!</li>
                            <li>Proactive </li>
                            <li>Ability to work quickly in a fast paced enviroment</li>
                            <li>Consistency in making drinks, food items, customer service</li>
                            <li>Must know how to count money, take payments, give change if needed</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className='m-2 mt-4 bg-stone-600 bg-opacity-50 font-merri p-4'>
              


                <div className='border-slate-100 border-dashed border-2 p-4'>
                <div className='text-center mb-4'>
                <h2 className='text-3xl underline font-bold mb-2'>Application</h2>
                <em className=' font-bold'>Please Submit A Resume When Submitting an Application!</em>
                </div>
                    
                    <form className=''>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Name</label>

                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="text" name="name" placeholder='John Coffee' required/>
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Address</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="text" name="address" placeholder='123 Boozer Street, Gulfport Ms. 39501' required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Phone</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="tel" name="address" placeholder='228-123-4567' required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Email Address</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="email" name="email" placeholder='john.coffee@example.com' required/>
                        </div>
                        <div className='flex flex-col mb-4'> 
                            <label className='text-xl mb-2 font-bold'>Date Available</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600 text-stone-600' type="date" name="availableDate" required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl font-bold'>Availability</label>
                            <em className='mb-2'>Please review our hours of operation.</em>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="text" name="availableDays" placeholder='Example: Monday, Wednesday, Friday, Saturday.' required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl font-bold mb-2'>Maximum desired hours</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="text" name="maxHours" placeholder='Example: Monday, Wednesday, Friday, Saturday.' required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl font-bold mb-2'>Education</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' type="text" name="education" placeholder='Example: High School Diploma, Associates, etc.' required/>
                        </div>






                        <div className='flex flex-col mb-4'>
                            <label className='text-xl font-bold'>Work History</label>
                            <em className='mb-2'>Previous Three, include roles, responsibilities, & length of employment</em>
                            <textarea className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' name="workHistory" rows="3" placeholder='Example: Starbucks, Shift Manager. Supervising team, inventory, cashiering, item preparation, customer service. 1.5 years.'></textarea>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>References</label>
                            <textarea className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' name="references" rows="3" placeholder='Example: Bob Mocha, Previous College Professor, 228-123-4567'></textarea>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Why do you want to work at Boozer's Brew?</label>
                            <textarea className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' name="why" rows="3" placeholder='Example: I want to be part of a team that brings happiness to the Gulf Coast by serving them the most delicious coffee.....do not copy this.'></textarea>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Tell us about yourself, and why you may be a good fit.</label>
                            <textarea className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600' name="yourself" rows="3" placeholder='Example: I am outgoing, hardworking, fun, and love coffee...do not copy this.'></textarea>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Resume</label>
                            <input className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600 md:w-1/4' type="file" accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf" required/>
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='text-xl mb-2 font-bold'>Interested Position</label>
                            <select name="positions" className='bg-slate-100 bg-opacity-50 placeholder-opacity-100 placeholder-stone-600'>
                                <option value="">--Please choose a position--</option>
                                <option value="Barista">Barista/Cashier Only</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Dishwasher">Dishwasher</option>
                                <option value="Supervisor">Supervisor - Requires Training in ALL Areas</option>
                            </select>
                        </div>

                        <div className='flex flex-col mb-4'>
                            <button className='text-xl bg-slate-100 md:w-1/4 mx-auto text-stone-600 rounded p-2' type="submit">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <Information/>
        </div>
    )
}
