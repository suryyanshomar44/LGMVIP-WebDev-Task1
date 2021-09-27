import React from 'react'


import img1 from './pictures/a.jpg';
import img2 from './pictures/2.jpg';
import img3 from './pictures/3.jpg';
import img4 from './pictures/4.jpeg';
import img5 from './pictures/5.jpg';
import img6 from './pictures/6.jpg';
import img7 from './pictures/7.jpg';
import img8 from './pictures/8.jpg';

import img9 from './pictures/9.jpg';
import img10 from './pictures/10.jpg';
import img11 from './pictures/11.jpg';
import img12 from './pictures/12.jpg';
import img13 from './pictures/13.jpg';
import img14 from './pictures/15.jpg';
import img15 from './pictures/16.jpg';
import img16 from './pictures/17.jpg';
import img17 from './pictures/18.jpeg';
import Menu from './Menu';

function Gallery() {   
    return(        
        <div>
            <Menu/>
            <br/>
            <input type="radio" name="Photos" id="check1" checked />
            <input type="radio" name="Photos" id="check2" />
            <input type="radio" name="Photos" id="check3" />
            <input type="radio" name="Photos" id="check4" />
             <br/> <br/> <br/>
             <div className="container">
                 <h1 className="text-black">GALLERY</h1>
                 <div className="top-content">
                     
                     <label htmlFor="check1" >All Photos</label>
                     <label htmlFor="check2">Animal</label>
                     <label htmlFor="check3">Sci-Fi</label>
                     <label htmlFor="check4">Nature</label>
                 </div>
{/* place-nature, family-animal, child-scifi             */}
             <div className="photo-gallery">
                 <div className="pic child"> 
                     <img src={img1} />
                 </div>
                 <div className="pic place">
                     <img src={img2} />
                 </div>
                 <div className="pic child"> 
                     <img src={img9} />
                 </div>
                 <div className="pic place">
                     <img src={img3} />
                 </div>
                 <div className="pic child"> 
                     <img src={img10} />
                 </div>
                 <div className="pic place">
                     <img src={img4} />
                 </div>
                 <div className="pic place">
                     <img src={img5} />
                 </div>
                 <div className="pic family">
                     <img src={img14} />
                 </div>
                 <div className="pic child"> 
                     <img src={img11} />
                 </div>
                 <div className="pic family">
                     <img src={img15} />
                 </div>
                 <div className="pic place">
                     <img src={img6} />
                 </div>
                 <div className="pic family">
                     <img src={img16} />
                 </div>
                 <div className="pic child"> 
                     <img src={img12} />
                 </div>
                 <div className="pic place">
                     <img src={img14} />
                 </div>
                 <div className="pic family">
                     <img src={img7} />
                 </div>                 
                 <div className="pic child"> 
                     <img src={img13} />
                 </div>
                 <div className="pic family">
                     <img src={img8} />
                 </div>
                 <div className="pic family">
                     <img src={img17} />
                 </div>
             </div>
             </div>
             <br/>
            <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam consequuntur praesentium optio veritatis assumenda sit tempora eveniet debitis saepe!
</p>
            <div className="social">
              <a href="https://www.facebook.com"><span className="fab fa-facebook-f"></span></a>
              <a href="#"><span className="fab fa-twitter"></span></a>
              <a href="https://www.instagram.com/suryansh_112/"><span className="fab fa-instagram"></span></a>
              <a href="https://youtube.com"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Poornima College of Engineering, Jaipur</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+91 1001001001</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">abc@example.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required />
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a>Suryansh Omar</a> | </span>
          <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
            
        </div>
    )
}

export default Gallery