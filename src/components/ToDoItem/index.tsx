import styles from './ToDoItem.module.css';
import check from './../../assets/check.svg';

import { Trash } from '@phosphor-icons/react';
import { useState } from 'react';

export function ToDoItem(): JSX.Element {
  const [isToDoChecked, setIsToDoChecked] = useState(false);

  const handleCheckBoxClick = (): void => {
    setIsToDoChecked((isChecked) => !isChecked);
  };

  return (
    <article className={styles.toDo}>
      <button
        onClick={handleCheckBoxClick}
        className={
          isToDoChecked
            ? `${styles.checkBox} ${styles.checked}`
            : styles.checkBox
        }
      >
        {isToDoChecked && <img src={check} />}
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <div className={styles.trashIcon}>
        <Trash color="#808080" />
      </div>
    </article>
  );
}
