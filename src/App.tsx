import styles from './styles/App.module.css';

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';

export interface ToDo {
  id: string;
  text: string;
  isChecked: boolean;
}

export function App(): JSX.Element {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const onCreateNewToDo = (toDoText: string): void => {
    setToDos((toDos) => [
      ...toDos,
      {
        id: uuidv4(),
        text: toDoText,
        isChecked: false,
      },
    ]);
  };

  const onCheckBoxClick = (id: string): void => {
    setToDos((toDos) => {
      return toDos.map((toDo) => {
        if (toDo.id === id) {
          return {
            ...toDo,
            isChecked: !toDo.isChecked,
          };
        }

        return toDo;
      });
    });
  };

  const onDeleteToDo = (id: string): void => {
    setToDos((toDos) => {
      return toDos.filter((toDo) => {
        return toDo.id !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>
        <ToDoForm createNewToDo={onCreateNewToDo} />
        <ToDoList
          toDos={toDos}
          toggleToDo={onCheckBoxClick}
          deleteToDo={onDeleteToDo}
        />
      </main>
    </>
  );
}
