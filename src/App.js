import './App.css'

import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react'
import images from './Images';


function App() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">
      <h1>Image Drag Sider</h1>
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:'grabbing'}}>
        <motion.div 
        drag="x" 
        dragConstraints={{right:0, left: -width}} 
        className="inner-carousel">
          {images.map(image => {
            return(
              <motion.div className='image' key={image}> 
                <img src={image} alt="" />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
