'use client';
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import { FiPhone, FiClock, FiMapPin, FiX } from "react-icons/fi"; 
import Nav from "./nav";

import CAYANA from "../../public/images/CAYANA.png"; 

// Animation variants for dropdown items
const dropdownItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);     
  const [callActive, setCallActive] = useState(false);
  const callContainerRef = useRef(null);

  const [headerBgActive, setHeaderBgActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      setHeaderBgActive(true);
    } else {
      timer = setTimeout(() => {
        setHeaderBgActive(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  // Close the call dropdown when clicking outside its container.
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        callContainerRef.current &&
        !callContainerRef.current.contains(event.target)
      ) {
        setCallActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Header variants: "colored" has the background color, "transparent" is clear.
  const headerVariants = {
    colored: { backgroundColor: "#f4f0ea", transition: { duration: 0.3 } },
    transparent: { backgroundColor: "transparent", transition: { duration: 0.3 } },
  };

  return (
    <motion.div 
      className={styles.header}
      variants={headerVariants}
      animate={headerBgActive ? "colored" : "transparent"}
    >
      <div className={styles.bar}>
        {/* Left side: site title */}
        <Link href="/" className="flex items-center">
        <Image
          src={CAYANA}
          alt="Cayana Logo"
          width={100}  
          height={100} 
          className="object-contain"
        />
      </Link>

        {/* Right side: "Our Project" text, Call button, and Menu toggle */}
        <div className={styles.rightContainer}>
          <motion.div
            variants={opacity}
            animate={!isActive ? "open" : "closed"}
            className={styles.shopContainer}
          >
            <p className={styles.shop}>Our Project</p>
            {/* Call Button & Dropdown Container */}
            <div className={styles.el} ref={callContainerRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCallActive(!callActive);
                }}
                className={styles.callButton}
              >
                <FiPhone size={20} color="#fff" />
              </button>

              {/* Call Dropdown */}
              <AnimatePresence>
                {callActive && (
                  <motion.div
                    variants={opacity}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className={styles.callDropdown}
                  >
                    <ul className={styles.callDropdownList}>
                      <motion.li
                        variants={dropdownItemVariants}
                        initial="hidden"
                        animate="visible"
                        className={styles.dropdownItem}
                      >
                        <FiPhone className={styles.icon} size={18} />
                        <span>Call Us: +1 234 567 890</span>
                      </motion.li>

                      <motion.li
                        variants={dropdownItemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                        className={styles.dropdownItem}
                      >
                        <FiClock className={styles.icon} size={18} />
                        <span>Request Call Back: +1 234 567 891</span>
                      </motion.li>

                      <motion.li
                        variants={dropdownItemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className={styles.dropdownItem}
                      >
                        <FiMapPin className={styles.icon} size={18} />
                        <span>123 Main St, City</span>
                      </motion.li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Menu toggle element */}
          {/* <div onClick={() => setIsActive(!isActive)} className={styles.el}>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
            ></div>
            <div className={styles.label}>
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>
              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Background overlay for menu */}
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
        onClick={() => setIsActive(false)}
      ></motion.div>

      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </motion.div>
  );
}
