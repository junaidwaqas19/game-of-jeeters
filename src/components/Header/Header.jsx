import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Modal from '../Modal/Modal.jsx';
import styles from './header.style.module.css';
import MobilePopMenu from './MobilePopMenu';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth <= 760);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsScreenMobile(window.innerWidth <= 760);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isScreenMobile ? (
        <header className={styles.header}>
          <img src="./image/Header.png" alt="" />
          <Link to="/" className={styles.logoLink}>
            <img src="/image/IMG_06161.png" alt="Logo" className={styles.logo} />
          </Link>
          <button ref={menuButtonRef} onClick={toggleMenu} className={styles.menuLink}>
            <img src="/image/Menu Button.png" alt="Menu Button" />
          </button>
        </header>
      ) : (
        <header className={styles.header}>
          <Link to="/">
            <img src="/image/IMG_06161.png" alt="Logo" className={styles.logo} />
          </Link>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/about_us">About</Link>
              </li>
              <li>
                <Link to="/key-stats">Key Stat</Link>
              </li>
              <li>
                <button style={{ color: 'white' }} onClick={handleOpenModal}>Link</button>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      {isScreenMobile && (
        <div className={`${styles.fullScreenMenu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <MobilePopMenu onCloseMenu={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  );
}

export default Header;
