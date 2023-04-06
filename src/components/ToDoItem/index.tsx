import styles from './ToDoItem.module.css';
import check from './../../assets/check.svg';

import { Trash } from '@phosphor-icons/react';
// import { useState } from 'react';
import { ToDo } from '../../App';

export function ToDoItem({ text, isChecked, id }: ToDo): JSX.Element {
  // const [isToDoChecked, setIsToDoChecked] = useState(false);

  // const handleCheckBoxClick = (): void => {
  //   setIsToDoChecked((isChecked) => !isChecked);
  // };

  return (
    <article className={styles.toDo}>
      <button
        // onClick={handleCheckBoxClick}
        className={
          isChecked ? `${styles.checkBox} ${styles.checked}` : styles.checkBox
        }
      >
        {isChecked && <img src={check} />}
      </button>
      <p className={isChecked ? styles.hasLineThrough : ''}>{text}</p>
      <div className={styles.trashIcon}>
        <Trash color="#808080" />
      </div>
    </article>
  );
}
