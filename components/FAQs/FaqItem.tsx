import React, { useState } from "react";
import styles from "./FaqItem.module.scss";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // Set to false to hide the answer by default

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // const theButton = document.querySelector('faqToggleBtn')

  // theButton?.addEventListener('click', function () {
  //   this.classList.toggle('clicked')
  // })

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqDefault}>
        <button className={styles.faqToggleBtn} onClick={toggleOpen}>
          {isOpen ? <img className={styles.faqIcons} src="https://starcoach-files.storage.iran.liara.space/close-icon.png" /> : <img className={styles.faqIcons} src="https://starcoach-files.storage.iran.liara.space/plus-icon.png" />}
        </button>

        <div className={styles.questionAndIcon}>
          <p id={styles.faqQuestion}>{question}</p>
          <img className={styles.faqIcons} src='https://starcoach-files.storage.iran.liara.space/question-mark-icon.png' />
        </div>
      </div>
      {isOpen && <p id={styles.faqAnswer}>{answer}</p>}
    </div>
  );
};

export default FaqItem;
