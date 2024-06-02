import React, { useState } from 'react';
import styles from './header.style.module.css';
import { Link } from "react-router-dom";
import Modal from '../Modal/Modal.jsx';

const MobilePopMenu = ({ onCloseMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    onCloseMenu();
  };

  return (
    <div>
      <button className={styles.closeButton} onClick={handleClose}>×</button>

      <div className={styles.mobileNav}>
        <Link to="/about_us" className={styles.mobileImageWrapper}>
          <img src="/image/IMG_0623.png" alt="" className={styles.mobileImage} />
          <div className={styles.mobileTextOverlay}>About</div>
        </Link>
        <Link to="/key-stats" className={styles.mobileImageWrapper}>
          <img src="/image/IMG_0623.png" alt="" className={styles.mobileImage} />
          <div className={styles.mobileTextOverlay}>Key State</div>
        </Link>
        <Link className={styles.mobileImageWrapper} onClick={handleOpenModal}>
          <img src="/image/IMG_0623.png" alt="" className={styles.mobileImage} />
          <div className={styles.mobileTextOverlay}>Link</div>
        </Link>
      </div>
      <img src="/image/IMG_06281.png" alt="" className={styles.newImage} />
  
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default MobilePopMenu;
