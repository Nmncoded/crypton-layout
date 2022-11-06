import React from 'react';
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setAnimateFace, setShareOptionVisibility } from '../../store/slices/headerSlice';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Header = () => {
    const { headerReducer: { animateFace, isShareOptionVisible } } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        handleAnimateFace();
    }, []);

    const handleAnimateFace = () => {
        dispatch(setAnimateFace(true));
        setTimeout(() => {
            dispatch(setAnimateFace(false));
        }, 2000)
    }

    return (
        <nav className='header-nav' >
            <Link className='nav-main_brand' href="/" onClick={handleAnimateFace} >
                <span>{animateFace ? "0" : "="}</span>
                <span
                    className={animateFace ? `animate_Face` : ''}
                    style={{ verticalAlign: animateFace ? "-webkit-baseline-middle" : ""}}
                >{animateFace ? "" : "_"}</span>
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
                onMouseOver={() => dispatch(setShareOptionVisibility(true))} 
                onMouseOut={() => dispatch(setShareOptionVisibility(false))}  
                >Share</div>
                <ul 
                onMouseOver={() => dispatch(setShareOptionVisibility(true))} 
                onMouseOut={() => dispatch(setShareOptionVisibility(false))}
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
