
import React from 'react'
import Menu from './Menu'
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Developer",
  "Photographer",
  "Freelancer"
];


const Base= () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
        <Menu/>
        <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
              <br/>
              <br/>
              <br/>
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Suryansh Omar</div>
            <div className="text-3">And I'm a <h1>
      <TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
      />
    </h1></div>
          </div>
        </div>
    </section>
      <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolores inventore aliquam nemo error odit at, accusantium a molestiae excepturi. Aliquid vitae libero dolor delectus alias fuga quas harum commodi dolorum laudantium veniam distinctio illo veritatis eveniet, cumque accusamus sapiente ipsam illum mollitia vero neque aperiam cum blanditiis laboriosam? Iste ex facilis placeat animi eum fuga dolorum eos ipsam eveniet totam incidunt, obcaecati culpa repudiandae in cupiditate inventore quibusdam explicabo doloribus voluptas veniam at eius. Reprehenderit fuga expedita voluptas nesciunt, quas eaque similique repudiandae nisi. Repellendus reiciendis ab est ducimus quisquam aliquid tenetur, ut incidunt mollitia. Velit officia aperiam vitae aliquid natus pariatur porro accusantium quis beatae! Nostrum libero molestias odio maxime laborum fugit? Neque mollitia iste repudiandae sequi totam eius natus animi. Sed hic quasi, distinctio minima quidem alias consequatur corporis quae provident exercitationem? Unde repudiandae eos officia sapiente ducimus distinctio, rerum rem numquam nam odit corrupti totam laboriosam ipsa explicabo ex dolorem veniam doloremque, labore ab molestias? Omnis quae assumenda accusantium optio minima molestiae ipsam sed quos et ut laboriosam ex aliquid temporibus, in voluptatibus facere unde maxime, dicta exercitationem natus magni odit ad? Quae animi facilis est debitis? Consectetur cum deleniti magnam ducimus accusamus ut, fuga quia.</p>

        
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
export default Base
