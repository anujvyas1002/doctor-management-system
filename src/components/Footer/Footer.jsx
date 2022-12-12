// import React from "react";
// import "./Footer.css";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <section className="footer-subscription">
//         <p className="footer-subscription-heading">
//           Are you looking for Doctor? Would you like to explore more hospitals?
//         </p>

//         <div className="input-areas">
//           <form>
//             <input
//               className="footer-input"
//               name="email"
//               type="email"
//               placeholder="Your Email"
//             />
//             <button className="footer-btn">save</button>
//           </form>
//         </div>
//       </section>

//  <div class="footer-links">
//       <div className="footer-link-wrapper">
//        <div class="footer-link-items">
//         <h2>Vidios</h2>
//         <Link to="/">Submit Video</Link>
//         <Link to="/">Ambassadors</Link>
//         <Link to="/">Agency</Link>
//         <Link to="/">Influencer</Link>
//        </div>
//        <div class="footer-link-items">
//         <h2>Social Media</h2>
//         <Link to="/">Instagram</Link>
//         <Link to="/">Facebook</Link>
//         <Link to="/">Youtube</Link>
//         <Link to="/">Twitter</Link>
//        </div>
//       </div>

// <div className="footer-link-wrapper">
//  <div class="footer-link-items">
//   <h2>About Us</h2>
//   <Link to="/sign-up">How it works</Link>
//   <Link to="/">Testimonials</Link>
//   <Link to="/">Careers</Link>
//   <Link to="/">Investers</Link>
//   <Link to="/">Terms of Service</Link>
//  </div>
//  <div class="footer-link-items">
// <h2>Contact Us</h2>
// <Link to="/">Contact</Link>
// <Link to="/">Support</Link>
// <Link to="/">Destinations</Link>
// <Link to="/">Sponserships</Link>
//  </div>
// </div>
// </div>

//      <section class="social-media">
//         <div class="social-media-wrap">
//           <div class="footer-logo">
//             <Link to='/' className="social-logo">
//             BRIGHT-SIDE &nbps;
//             <i class="fas fa-route"></i>
//             </Link>
//           </div>
//           <small class="website-rights">BRIGHT-SIDE @ 2020</small>
//           <div class="social-icons">
//             <Link class="social-icon-link facebook" to="/" target="_blank" arial-label="Facebook">
//               <i class="fab fa-facebook-f"/>
//             </Link>            <Link class="social-icon-link instagram" to="/" target="_blank" arial-label="instagram">
//               <i class="fab fa-instagram"/>
//             </Link>
//             <Link class="social-icon-link youtube" to="/" target="_blank" arial-label="youtube">
//               <i class="fab fa-youtube"/>
//             </Link>
//             <Link class="social-icon-link twitter" to="/" target="_blank" arial-label="twitter">
//               <i class="fab fa-twitter-f"/>
//             </Link>
//             <Link class="social-icon-link linkedin" to="/" target="_blank" arial-label="linkedin">
//               <i class="fab fa-linkedin-f"/>
//             </Link>
//           </div>
//         </div>
//      </section>

//    </div>

//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className="footer-container">
           <p className="footer-subscription-heading">
          Are you looking for Doctor? Would you like to explore more hospitals?
        </p>

      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Vidios</h2>
          <a href="/">Submit Vidio</a>
          <a href="/">Ambassadors</a>
          <a href="/">Agency</a>
          <a href="/">Influencer</a>
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <a href="/">Linkedin</a>
          <a href="/">Youtube</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </div>
        <div className="footer-link-items">
          <h2>About Us</h2>
          <a href="/">How it works</a>
          <a href="/">Testimonial</a>
          <a href="/">Careers</a>
          <a href="/">Investors</a>
          <a href="/">Terms of Service</a>

        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <a href="/">Contact</a>
          <a href="/">Support</a>
          <a href="/">Destinations</a>
          <a href="/">Sponserships</a>
        </div>
       
        <div className="footer-link-items social">
        <LinkedInIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <InstagramIcon/>
        <FacebookIcon/>
        </div>
      </div>
      <div></div>
      
    </div>
  );
};

export default Footer;
