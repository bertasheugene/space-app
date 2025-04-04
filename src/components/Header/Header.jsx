import React, {useState, useEffect, useRef} from 'react';
import logoImage from '../../assets/images/logo.svg';
import { menuItems } from './MenuItems';
import BasketIcon from '../Icons/BasketIcon'
import CloseIcon from '../Icons/CloseIcon'
import BurgerIcon from '../Icons/BurgerIcon'


function Header () {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {

          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header'>
            <div className='container'>

                <div className='header__wrapper' ref={menuRef}>
                    <div className='header__logo'>
                        <a href="/">
                            <img src={logoImage} alt="Logo" title='Logo'/>
                        </a>
                    </div>

                    <nav id='main-menu' className={`header__nav nav ${isOpen ? 'header__nav_open' : ''}`}>
                        <ul className='nav__list'>
                            {menuItems.map(item => (
                            <li className='nav__item' key={item.id}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                            ))}

                            <li className='nav__item'>
                                <a href="/basket" aria-label="Cart"><BasketIcon/></a>
                            </li>
                        </ul>
                    </nav>

                    <div className='header__mobile'>
                        <div 
                        aria-expanded={isOpen}
                        aria-controls="main-menu"
                        role="button"
                        onClick={toggleMenu} 
                        className={`${isOpen ? 'header__close' : 'header__burger'}`} >
                            {isOpen ? <CloseIcon/> : <BurgerIcon/>} 
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;