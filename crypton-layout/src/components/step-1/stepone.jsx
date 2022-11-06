import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './stepone.scss';

export const StepOne = () => {
    const [translateY, setTranslateY] = useState(0);
    const { headerReducer: { animateFace, isShareOptionVisible } } = useSelector(state => state);
    const dispatch = useDispatch();
    const titleData = ["H","e", 'l', 'l', 'o', '!', ' ', 'I', `'`, 'm', '&nbsp;', 'C', 'r', 'y', 'p', 't', 'o', 'n'];
    const subTitleData =  `A cryptocurrency trading bot based on machine learning.`;

    return (
        <div className='step_one' >
            <div 
            className='custom_text' 
            // style={{ transform: `translateY(${translateY}%)` }} 
            >
                <div className={'text-title' + `${animateFace ? " animate-title" : ""}`} >
                    {
                        titleData.map((d, index) =>
                            d == '&nbsp;' ?
                                <span key={index} aria-hidden='true' >&nbsp;</span>
                                :
                                <span key={index} >{d}</span>
                        )
                    }
                </div>
                <div 
                className={'sub-title' + `${animateFace ? " animate-sub-title" : ""}`} 
                >
                    {
                        subTitleData.split("").map((d, index) => <span key={index} className={`char${index + 1}`} aria-hidden='true' >{d}</span>
                        )
                    }
                </div>  
                {/* <div
                    className='cursor active'
                    style={{ transform: `scaleY(${1})`, backgroundColor: `rgb(${255},${255},${255})`, right: 'auto', left: "0px", top: '0px' }}
                ></div> */}
            </div>
            {/* <Link to={"#"} className='animItem arrow_cover active' style={{opacity: 1}} >
                <div className='animItem__arrow animItem__arrow_down animItem__arrow_cover' >
                </div>
            </Link> */}
        </div>
    )
}
