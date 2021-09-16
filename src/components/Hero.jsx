import React,{useState} from 'react'
import Nav from './Nav'
import {usePalette} from 'react-palette'
function Hero() {
    const [image,setImage] = useState('/image/image/beach.jpg')
    const image1 = '/image/image/waterfall.jpg'
    const image2 = '/image/image/beach.jpg'
    const image3 = '/image/image/mountain.jpg'
    const image4 = '/image/image/bike.jpg'
    const image5 = '/image/image/plant.jpg'
    const hello ='hello i am hruda'
    const {data}  = usePalette(image)
    localStorage.setItem('color' , data.vibrant)
    const myf=()=>{
        setImage(image1)
        
        
    }
    return (
        <div className='herosection'>

            <div className='imagesection'>
                <img src={image} alt={image} className='heroimage' />
            </div>
            <div className='contentsection'>
               <Nav color={data} />
               <div className='herocontent'>
                     <h2 className='headline'>The management system</h2>
                     <p className='headpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio eius aspernatur. Aut ut ea possimus debitis architecto reprehenderit eius.</p>
                     <button className='btn' style={{display:'block', margin:'0 auto',background:data.vibrant}} onClick={()=>setTimeout(myf,3000)}>let's start</button>
               </div>
            </div>
        </div>
    )
}

export default Hero
