import React from 'react';
import styles from './modal.styles.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <br/>

        <h2 className={styles.modalHeading}>Pick Link</h2>
        <a href="https://dexscreener.com/" target="_blank" className={styles.modalButton}>
          <span className={styles.modalButtonText}>Dexscreener</span>
        
        </a>
        <a href="https://pump.fun/" target="_blank" className={styles.modalButton}>
          <span className={styles.modalButtonText}>Pump Fun</span>
        
        </a>
        <a href="https://birdeye.so/" target="_blank" className={styles.modalButton}>
          <span className={styles.modalButtonText}>Brideye</span>
          
        </a>
        <div>
        <div className={styles.iconContainer}>
          
          <a href="https://twitter.com/GameOfGeeters" target="_blank" rel="noopener noreferrer">
             <img src="/image/image 1.png" alt="" />
          </a>
          <a href="https://t.me/gojeeters">
              <img src="/image/image 2.png" alt="" target="_blank" />
          </a>
          
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Modal;
