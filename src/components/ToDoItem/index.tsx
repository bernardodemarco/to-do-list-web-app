import styles from './ToDoItem.module.css';
import check from './../../assets/check.svg';

import { Trash } from '@phosphor-icons/react';
import { ToDo } from '../../App';

interface ToDoItem extends ToDo {
  toggleToDo: (id: string) => void;
  deleteToDo: (id: string) => void;
}

export function ToDoItem({
  text,
  isChecked,
  id,
  toggleToDo,
  deleteToDo,
}: ToDoItem): JSX.Element {
  const handleCheckBoxClick = (): void => {
    toggleToDo(id);
  };

  const handleDeleteToDo = (): void => {
    deleteToDo(id);
  };

  return (
    <article className={styles.toDo}>
      <button
        onClick={handleCheckBoxClick}
        className={
          isChecked ? `${styles.checkBox} ${styles.checked}` : styles.checkBox
        }
      >
        {isChecked && <img src={check} />}
      </button>
      <p className={isChecked ? styles.hasLineThrough : ''}>{text}</p>
      <div className={styles.trashIcon} onClick={handleDeleteToDo}>
        <Trash color="#808080" />
      </div>
    </article>
  );
}
