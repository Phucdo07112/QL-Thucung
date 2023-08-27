import React from 'react'
import "../../footer.css"
import { BiLogoFacebookCircle} from 'react-icons/bi';
import { BiLogoInstagramAlt} from 'react-icons/bi';
import { BiLogoTwitter} from 'react-icons/bi';
import { BiLogoPinterest} from 'react-icons/bi';



const Footer = () => {
  return (
    <div id="footer">
      <img src="/images/Logo.png"></img>
            <div class="footer-list"> 
              <a target='_blank' href='https://www.facebook.com/profile.php?id=100028583903010'>  <BiLogoFacebookCircle /> </a>
              <a target='_blank' href='https://www.facebook.com/profile.php?id=100028583903010'>  <BiLogoInstagramAlt/> </a>
              <a target='_blank' href='https://www.facebook.com/profile.php?id=100028583903010'>  <BiLogoTwitter/> </a>
              <a target='_blank' href='https://www.pinterest.com/search/pins/?q=th%C3%BA%20c%C6%B0ng&rs=typed'>  <BiLogoPinterest /> </a>           
            </div> 

            <div id='links'>
              <a target='_blank'href=''>Pet Services</a>
              <a target='_blank'href=''>About Us</a>
              <a target='_blank'href=''>Pet Boarding</a>
              <a target='_blank'href=''>Latest News</a>
              <a target='_blank'href=''>Contract</a>
            </div>

         

            <p class="copyright">Cửa Hàng Thú Cưng</p> 
        </div>  
     

  )
}

export default Footer