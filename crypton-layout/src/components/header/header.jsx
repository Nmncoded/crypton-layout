import React from 'react';
import { useState } from 'react';
import './header.scss';
import { useSelector, useDispatch, connect } from 'react-redux';
import { decrement, increment } from '../../store/slices/headerSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';

export const Header = () => {
    // let connector = false;
    const { headerReducer: { value } } = useSelector(state => state);
    const dispatch = useDispatch();
    const linkRef = useRef();
    const [animateFace, setAnimateFace] = useState(false);
    const [isShareOptionVisible, setShareOptionVisibility] = useState(false);

    useEffect(() => {
        handleAnimateFace();
    }, []);

    const handleAnimateFace = () => {
        setAnimateFace(true);
        setTimeout(() => {
            setAnimateFace(false);
        }, 2000)
    }

    return (
        <nav className='header-nav' >
            <Link className='nav-main_brand' href="/" onClick={handleAnimateFace} >
                <span>{animateFace ? "0" : "="}</span>
                <span
                    className={animateFace ? `animate_Face` : ''}
                    style={{ verticalAlign: animateFace ? "-webkit-baseline-middle" : "" }}
                >_</span>
                <span>{animateFace ? "0" : "="}</span>
            </Link>
            <ul className='footer_menu' >
                <li  >
                    <Link className='footer_menu_item' to='technology' >Technology</Link>
                </li>
                <li  >
                    <Link  className='footer_menu_item' to='team' >Team lookup</Link>
                </li>
                <li  >
                    <Link  className='footer_menu_item' to='contacts' >Contacts</Link>
                </li>
            </ul>
            <div  className='share' >
                <div  
                className='share_title'  
                onMouseOver={() => setShareOptionVisibility(true)} 
                onMouseOut={() => setShareOptionVisibility(false)}  
                >Share</div>
                <ul 
                onMouseOver={() => setShareOptionVisibility(true)} 
                onMouseOut={() => setShareOptionVisibility(false)}
                className={isShareOptionVisible ? "" : 'share_list'} >
                    <li className='share_item' >
                        <a href="https://www.facebook.com">facebook</a>
                    </li>
                    <li className='share_item' >
                        <a href="https://www.twitter.com">twitter</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
