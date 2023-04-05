import styles from './ToDoList.module.css';

import { ToDoItem } from '../ToDoItem';

export function ToDoList(): JSX.Element {
  return (
    <div>
      <header className={styles.header}>
        <div>
          <p className={styles.blueText}>Tarefas criadas</p>
          <span className={styles.number}>5</span>
        </div>
        <div>
          <p className={styles.purpleText}>Concluídas</p>
          <span className={styles.number}>2 de 5</span>
        </div>
      </header>
      <div className={styles.toDosWrapper}>
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
}
