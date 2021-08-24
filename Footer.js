import React from 'react'
import { Icon } from 'semantic-ui-react'
import "./Footer.css"

class Footer extends React.Component{
     constructor(){
          super()
          this.state={

          }
     }
     render(){
          return(
               <div className='mainfootercontainer'>
                    <div className = 'footercontainer'>
                         <div>
                              <h5>My Account</h5>
                              <p>My orders</p>
                              <p>My Addresses</p>
                              <p>My vouchers</p>
                         </div>
                         <div>
                              <h5>Support</h5>
                              <p>Legal</p>
                              <p>FAQ</p>
                              <p>Terms and Conditions</p>
                              <p>Cancellation policy</p>
                         </div>
                         <div>
                              <h5>Information</h5>
                              <p>About us</p>
                              <p>Careers</p>
                              <p>Our Story</p>
                              <p>Unsubscribe promotional SMS/Email</p>
                              <p>Blog</p>
                         </div>
                         <div>
                              <h5>Menu</h5>
                              <p>On the Menu</p>
                              <p>plan & pricing</p>
                              <p>Homechef Specials</p>
                              <p>How it works</p>
                              <p>Recipes</p>
                              <p>Reviews</p>
                              <p>Download App</p>
                         </div>
                         <div>
                              <h5>Contact-Us</h5>
                              <p><Icon name='phone'/>call us now : 07395816325</p>
                              <p><Icon name='whatsapp'/>+91 7395816325</p>
                              <p><Icon name='mail'/>support@juzmeal.com</p>
                              <h5>FSSAI:</h5>
                              <div>
                                   <Icon name='facebook'/>
                                   <Icon name='twitter'/>
                                   <Icon name='instagram'/>
                                   <Icon name='linkedin'/>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}
export default Footer;