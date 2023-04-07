import styles from './ToDoList.module.css';
import toDoNotFound from './../../assets/to-do-not-found.svg';

import { ToDoItem } from '../ToDoItem';
import { ToDo } from '../../App';

interface ToDoListProps {
  toDos: ToDo[];
  toggleToDo: (id: string) => void;
  deleteToDo: (id: string) => void;
}

export function ToDoList({
  toDos,
  toggleToDo,
  deleteToDo,
}: ToDoListProps): JSX.Element {
  const numOfToDos = toDos.length;
  const numOfCompletedToDos = toDos.filter((toDo) => {
    return toDo.isChecked === true;
  }).length;

  return (
    <div>
      <header className={styles.header}>
        <div>
          <p className={styles.blueText}>Tarefas criadas</p>
          <span className={styles.number}>{numOfToDos}</span>
        </div>
        <div>
          <p className={styles.purpleText}>Concluídas</p>
          <span className={styles.number}>
            {numOfCompletedToDos} de {numOfToDos}
          </span>
        </div>
      </header>
      <div className={`${styles.toDosWrapper}`}>
        {toDos.length === 0 ? (
          <div className={styles.toDoNotFound}>
            <img src={toDoNotFound} alt="To-do was not found" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <>
            {toDos.map((toDo) => (
              <ToDoItem
                toggleToDo={toggleToDo}
                deleteToDo={deleteToDo}
                text={toDo.text}
                isChecked={toDo.isChecked}
                id={toDo.id}
                key={toDo.id}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
