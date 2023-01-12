import { useEffect, useState } from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

import './Home.css'

var time = 0
function Home() {
    const [displayimg, setDisplayimg] = useState(img1)
    function addTime(){
        time++

    }
    useEffect(() => {

        const interval = setInterval(() => {
            addTime()  
            console.log(time)
            
            if(time === 11){
                time = 0
            }
            if(time === 2){
                setDisplayimg(img2)
            }
            if(time === 4){
                setDisplayimg(img3)
            }
            if(time === 6){
                setDisplayimg(img4)
            }
            if(time === 8){
                setDisplayimg(img5)
            }
            if(time === 10){
                setDisplayimg(img1)
            }

        }, 3000);

        return () => clearInterval(interval);

      }, []);

    
  

    return ( 
        <div className="content">
        <div className="left-c">
          <h2>Lorem ipsum dolor sit amet!</h2>
          <p>Lorem ipsum aspernatur debitis accusamus quia repellat vero tempore?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid tenetur possimus cupiditate facilis quibusdam ducimus deleniti odit! Sapiente eaque at sit quam delectus qui debitis rerum. Voluptates dicta dolores excepturi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti corporis voluptates harum veniam, dolores nam ad, culpa optio eum, iusto dolorem neque numquam. Nam obcaecati veniam corporis quas nulla?</p>
        </div>
        <div className="right-c">
          <img src={displayimg} alt="" />
        </div>
      </div>

     );
}

export default Home;