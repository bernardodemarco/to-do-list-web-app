import styles from './styles/App.module.css';

import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';
import { useState } from 'react';

export interface ToDo {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App(): JSX.Element {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const onCreateNewToDo = (toDoText: string): void => {
    setToDos((toDos) => [
      ...toDos,
      {
        id: 0,
        text: toDoText,
        isChecked: false,
      },
    ]);
  };

  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>
        <ToDoForm createNewToDo={onCreateNewToDo} />
        <ToDoList toDos={toDos} />
      </main>
    </>
  );
}
