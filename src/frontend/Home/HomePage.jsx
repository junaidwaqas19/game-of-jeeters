import React,{useState} from 'react';
import styles from './style.module.css';
import { Link } from "react-router-dom";
import Modal from '../../components/Modal/Modal.jsx'
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEntered,setIsEntered] =useState(false); 
  const handleEnterPress = () => {
    setIsEntered(true);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
    {!isEntered && (
      <>
      <div className={styles.backgroundImage}>
        <img src="/image/IMG_06221.png" alt="Background" />
      </div>
      <div id="logo" className={styles.logo}>
        <Link to="">
        <img src="/image/IMG_06161.png" alt="Logo" />
        </Link>
        
        <div className={styles.imageContainer}>
          <Link to="/about_us" className={styles.imageWrapper}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}>About</div>
          </Link>
          <Link to="/key-stats" className={styles.imageWrapper}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}>Key State</div>
          </Link>
          <Link  className={styles.imageWrapper} onClick={handleOpenModal}>
            <img src="/image/IMG_0623.png" alt="" />
            <div className={styles.textOverlay}><button  >Link</button>
          </div>
          </Link>
        </div>
      </div>
        
            <Link onClick={handleEnterPress}>
                <div className={styles.NavMobileLink}>
                    <img src="./image/IMG_06241.png" alt="" />
                    <div className={styles.enterText}>
                        <span>Enter</span>
                    </div>
                </div>
             </Link>
             </>
      )} {isEntered &&(

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
            <div className={styles.mobileTextOverlay}><button>Link</button></div>
          </Link>
        </div>
      )} 
         
         <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default HomePage;
