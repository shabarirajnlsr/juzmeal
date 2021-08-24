import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component{
     constructor(){
          super()
          this.state={
               showdata:false
          }
     }

     render(){
          return(
               <div className='navbar'>
                    <div className='leftnavbar'>
                         <img src="JUZMEAL-Logo-Alone-Red.png" alt='nofile'/>
                    </div>
                    <div className ='rightnavbar'>
                         <p><b>Home</b></p>
                         <p><b>About-Us</b></p>
                         <p><ul className='subnavlistone'><b>Subscription</b>
                              <li>BreakFast</li>
                              <li>Lunch</li>
                              <li>Dinner</li>
                         </ul></p>
                         <p><b>Support</b></p>
                    </div>
               </div>
          )
     }
}
export default Navbar;