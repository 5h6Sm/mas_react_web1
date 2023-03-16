import { useMotionValue, useTransform , useCycle, motion, AnimatePresence} from "framer-motion";
import React from 'react';
import { useState } from 'react';

import sun from './images/sun.png'
import star from './images/star.png';
import moon from './images/moon.png';

function Header() {
return (
    <div className='all_wrapper'>
    <div class="top">
        <div class="top_text">
            <h1>MAS 2ND:<br/>PROJECT</h1>
            </div>
            <div class="text_img">        
                <div class="op">
                
                </div>
            </div>
        </div>
    </div>
    );
  }

function SpanText(props){
    return (
        <span className="text">{props}</span>
    );
    }

  function HoverImg(sun, star, moon){
    const [isVisible1, setIsVisible1] = useState('');

    return(
<div>
    {/* 해버튼 마우스 닿을 시 글자 나옴 */}
    <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}>
        <motion.a
        onHoverStart={(e) => setIsVisible1(true)}
        onHoverEnd={(e) => setIsVisible1(false)}
        >
        <a href=''><img src={sun} alt="ABOUT" className="sun_buttons" /></a><br />
        </motion.a>
    </motion.div>
    <AnimatePresence>
        {isVisible1 && (
        <motion.div
            className="navigation-text"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 3 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 1 }}>
            <SpanText props = 'ABOUT'/>;
        </motion.div>
        )}
    </AnimatePresence>
    </div>
  );}


