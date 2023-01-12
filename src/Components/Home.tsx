import img1 from '../assets/img1.jpg'
import './Home.css'
function Home() {
    return ( 
        <div className="content">
                <div className="left-c">
                <p id='highlight'>TUDO</p>
                <p>sobre calçados, </p>
                <p id='highlight'>VOCÊ</p>
                <p>encontra</p>
                <p id='highlight'>AQUI!😊</p>
                </div>
                <div className="right-c">
                <img src={img1} alt="" />
                </div>
            </div>
     );
}

export default Home;