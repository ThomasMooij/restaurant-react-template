import { useState } from "react"
import {Link } from "react-router-dom"
import MenuItem from "./MenuItem"

const Menu = () => {

  const [menuItem, setMenuItem] = useState('BreakFast')
  const [category, setCategory] = useState('BreakFast')

  const handleChange = (category) => {
    setMenuItem(category)
    setCategory(category)
  }

  return (
    <section id='Menu' className='w-screen h-screen flex justify-center '>
         {/* MENU WRAPPER */}
         <div className="w-[80%] h-[80%] border border-gray-300 rounded-lg shadow-md p-4 flex  flex-col gap-8 bg-[#dbdbc3]">
          <header className="flex space-x-8 p-4 mx-auto">
            <button 
                className={`${menuItem === 'BreakFast' ? ' border-b-2 border-green-600 text-xl font-medium ' : 'text-xl font-medium '}`}        
                onClick={() => handleChange('BreakFast')}
              >Breakfast</button>
            <button 
              className={`${menuItem === 'Lunch' ? ' border-b-2 border-green-600 text-xl font-medium ' : 'text-xl font-medium '}`}         
              onClick={() => handleChange('Lunch')}
            >Lunch</button>
              
            <button 
              className={`${menuItem === 'Dinner' ? ' border-b-2 border-green-600 text-xl font-medium ' : 'text-xl font-medium '}`}           
              onClick={() => handleChange('Dinner')}
            >Dinner</button>

            <button 
              className={`${menuItem === 'Drinks' ? ' border-b-2 border-green-600 text-xl font-medium ' : 'text-xl font-medium '}`}     
              onClick={() => handleChange('Drinks')}
            >Drinks</button>
          </header>
             <MenuItem category={category} />
        </div>
    </section>
  )
}

export default Menu