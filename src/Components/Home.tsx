import { useEffect, useState } from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/airmax90.png'
import img3 from '../assets/allstar.png'
import img4 from '../assets/vansslip.png'
import img5 from '../assets/airmax97.png'

import styled from 'styled-components'
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
                setDisplayimg(img1)
            }
            if(time === 4){
                setDisplayimg(img2)
            }
            if(time === 6){
                setDisplayimg(img3)
            }
            if(time === 8){
                setDisplayimg(img4)
            }
            if(time === 10){
                setDisplayimg(img5)
            }

        }, 3000);

        return () => clearInterval(interval);

      }, []);

      const Imagem = styled.img`
        width: 91.125rem;
        height: 21.875rem;
        border-radius: 5px;
        animation-name: learn;
        animation-duration: 2s;

    `;
  

    return ( 
        <div className="content">
        <div className="left-c">
          <h2>Lorem ipsum dolor sit amet!</h2>
          <p>Lorem ipsum aspernatur debitis accusamus quia repellat vero tempore?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid tenetur possimus cupiditate facilis quibusdam ducimus deleniti odit! Sapiente eaque at sit quam delectus qui debitis rerum. Voluptates dicta dolores excepturi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deleniti corporis voluptates harum veniam, dolores nam ad, culpa optio eum, iusto dolorem neque numquam. Nam obcaecati veniam corporis quas nulla?</p>
        </div>
        <div className="right-c">
          <Imagem src={displayimg}  alt="" />
        </div>
      </div>

     );
}

export default Home;