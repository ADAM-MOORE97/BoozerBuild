import React from 'react'
import { Information } from './Information'

export const Menu = () => {
    return (
        <div>
            <div className='mt-4 m-2 font-merri bg-slate-100 bg-opacity-50'>
                <div>
                    <h2 className='text-center text-2xl md:text-3xl underline mb-4 p-4'>Drinks</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 text-center divide-dashed  md:divide-x-2 divide-stone-600'>

                        <div className='m-1'>
                            <h3 className='text-xl bg-stone-600 md:w-1/2 mx-auto text-boozerblue'>Flavors</h3>
                            <div className='grid grid-cols-2 '>
                                <div className=''>
                                    <ul className='mt-2'>
                                        <li>Almond</li>
                                        <li>Amaretto</li>
                                        <li>Caramel</li>
                                        <li>Chocolate</li>
                                        <li>Cinnamon</li>
                                        <li>Cinnamon Bun</li>
                                        <li>Coconut</li>
                                        <li>Dark Chocolate</li>
                                        <li>Hazelnut</li>
                                        <li>Irish Cream</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className='mt-2'>
                                        <li>Macadamia Nut</li>
                                        <li>Peanut Butter</li>
                                        <li>Peppermint</li>
                                        <li>Praline</li>
                                        <li>Pumpkin Pie</li>
                                        <li>Pumpkin Spice</li>
                                        <li>Spiced Brown Sugar</li>
                                        <li>Toasted Marshmallow</li>
                                        <li>Toffee Nut</li>
                                        <li>Vanilla</li>
                                        <li>White Chocolate</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='m-1 '>
                            <h3 className='text-xl md:w-1/2 mx-auto text-boozerblue bg-stone-600'>Iced</h3>
                            <ul className='mt-2'>
                                <li>Frozen Coffee</li>
                                <li>Iced Latte</li>
                                <li>Iced Coffee</li>
                                <li>Iced Cold Brew</li>
                                <li>Iced Americano</li>
                                <li>Iced Chai</li>
                                <li>Southern Tea</li>
                                <li>Bottled Soft Drinks</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-xl bg-stone-600 md:w-1/2 mx-auto text-boozerblue'>Hot</h3>
                            <ul className='mt-2'>
                                <li>American</li>
                                <li>House Coffee</li>
                                <li>Medium-Dark Roast Decaf</li>
                                <li>Cappuccino</li>
                                <li>Latte</li>
                                <li>Cafe Au Lait</li>
                                <li>Chai Tea</li>
                                <li>Hot Chocolate</li>
                                <li>Espresso</li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-center mt-4'>
                        <h3 className='text-lg underline'>Sugar Free Flavors</h3>
                        <em className='text-sm'>CARAMEL-CHOCOLATE-HAZELNUT-RASPBERRY-WHITE CHOCOLATE-VANILLA</em>
                    </div>
                </div>

            </div>
            <div className='m-2 mt-4 bg-stone-600 bg-opacity-50 font-merri p-4 '>
                <h2 className='text-center text-2xl md:text-3xl underline mb-4'>Breakfast</h2>
                <ul className='text-xl text-center divide-y-2 divide-dashed divide-white text-boozerblue'>
                    <li className='mb-4 p-4'>
                        <h3 className='underline'>Toasted Bagel</h3>
                        <p className='text-md text-boozerblue'>Plain, Blueberry, Cinnamon, Everything</p>
                        <em>Choice of butter, cream cheese, jelly, peanut butter</em>

                    </li>

                    <li className='mb-4 p-4 text-boozerblue'>
                        <h3 className='underline'>Toasted Croissant</h3>
                        <p className='text-md'>Buttery & flaky</p>
                        <em>Choice of butter, cream cheese, jelly, peanut butter</em>

                    </li>
                    <li className='mb-4 p-4'>
                        <h3 className=' underline'>Bagel Sandwich</h3>
                        <em>Delicious egg, cheese, & choice of sausage, bacon, or ham</em>

                    </li>
                    <li className='mb-4 p-4'>
                        <h3 className='underline'>Croissant Sandwich</h3>
                        <em>Delicios egg, cheese, & choice of sausage, bacon or ham</em>

                    </li>
                    <li className='mb-4 p-4'>
                        <h3 className='underline'>Everything Bowl</h3>
                        <em>Eggs, sausage, bacon, ham, cheese, avocado, spinach, & tomatoes</em>

                    </li>
                </ul>
            </div>
            <div className='mt-4 m-2 font-merri bg-slate-100 bg-opacity-50'>
                <h2 className='text-center text-2xl md:text-3xl underline mb-2'>Hot Sandwiches</h2>
                <div className='text-center divide-y-2 divide-dashed divide-stone-600 p-4'>
                    <div className='text-xl text-center p-2'>
                        <em>*All sandwiches are available on Berry Wheat Bread, Ciabatta, Croissant, or Wheat Wrap.</em>
                        <br></br>
                        <em>Served with your choice of side: potato salad, chips, fruit, or cookie.*</em>
                    </div>
                    <div>
                        <ul className='text-xl divide-y-2 divide-dashed divide-stone-600'>
                            <li className='mb-4 p-4'>
                                <h3 className='underline '>Turkey</h3>
                                <em className='text-md'>provolone, spinach leaves, sliced tomatoe, honey mustard</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Ham</h3>
                                <em>american cheese, spinach leaves, sliced tomatoes, mayonnaise</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Club</h3>
                                <em>ham, turkey, bacon, american cheese, spinach leaves, sliced tomato, mayonnaise</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken</h3>
                                <em>provolone cheese, spinach leaves, sliced tomato, mayonnaise, mustard</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken Salad</h3>
                                <em>creamy chicken salad, spinach leaves, tomato</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Roast Beef</h3>
                                <em>provolone cheese, mayonnaise, side of gravy</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Pesto Turkey</h3>
                                <em>swiss cheese, roasted red peppers, spinach, pesto</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken Bacon Ranch</h3>
                                <em>provolone cheese, chicken, bacon, tomato, ranch</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Veggie Wrap</h3>
                                <em>Provolone cheese, almonds, peanuts, mandarin oranges, spinach leaves, tomatoe, cucumber, manderin dressing</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-4 m-2 font-merri bg-stone-600 bg-opacity-50'>
                <h2 className='text-center text-2xl md:text-3xl underline mb-2'>Salads</h2>
                <div className='text-center divide-y-2 divide-dashed divide-white p-4 text-boozerblue'>
                    <div className='text-xl text-center p-2'>
                        <em>*Dressings: Balsamic Vinaigrette, Mandarin Orange, Ranch, Honey Mustard, Caesar</em>

                    </div>
                    <div>
                        <ul className='text-xl divide-y-2 divide-dashed divide-white'>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Boozer Salad</h3>
                                <em>spinach leaves, strawberries, mandarin oranges, almonds, chicken, goat cheese</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Garden Salad</h3>
                                <em>spinach leaves, tomato, cucumbers, carrots, cheese, croutons</em>
                                <br></br>
                                <em>add chicken, ham, turkey *</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Club</h3>
                                <em>ham, turkey, bacon, american cheese, spinach leaves, sliced tomato, mayonnaise</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken</h3>
                                <em>provolone cheese, spinach leaves, sliced tomato, mayonnaise, mustard</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken Salad</h3>
                                <em>creamy chicken salad, spinach leaves, tomato</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Roast Beef</h3>
                                <em>provolone cheese, mayonnaise, side of gravy</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Pesto Turkey</h3>
                                <em>swiss cheese, roasted red peppers, spinach, pesto</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Chicken Bacon Ranch</h3>
                                <em>provolone cheese, chicken, bacon, tomato, ranch</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Veggie Wrap</h3>
                                <em>Provolone cheese, almonds, peanuts, mandarin oranges, spinach leaves, tomatoe, cucumber, manderin dressing</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-4 m-2 font-merri bg-slate-100 bg-opacity-50'>
                <h2 className='text-center text-2xl md:text-3xl underline mb-2'>Protein Shakes</h2>
                <div className='text-center divide-y-2 divide-dashed divide-stone-600 p-4'>

                    <div>
                        <ul className='text-xl divide-y-2 divide-dashed divide-stone-600'>
                            <li className='mb-4 p-4'>
                                <h3 className='underline '>Berry Blast</h3>
                                <em className='text-md'>blueberries, strawberies, chia seeds, almond milk, vanilla protein</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Funky Monkey</h3>
                                <em>peanut butter, banana, cacoa nibs, almond milk, chocolate protein</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Paradise</h3>
                                <em>strawberries, oranges, banana, almond milk, vanilla protein</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>The Green Machine</h3>
                                <em>greens, cucumbers, banana, chia seeds, flax seeds, almond milk, vanilla protein</em>
                            </li>
                            <li className='mb-4 p-4'>
                                <h3 className='underline'>Boozer's Go To</h3>
                                <em>cold brew, banana, cacoa powder, almond milk, chocolate protein</em>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
           <Information/>
        </div>
    )
}
