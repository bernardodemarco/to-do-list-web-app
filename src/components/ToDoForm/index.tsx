import styles from './ToDoForm.module.css';

import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

interface ToDoFormProps {
  createNewToDo: (toDoText: string) => void;
}

export function ToDoForm({ createNewToDo }: ToDoFormProps): JSX.Element {
  const [newToDoText, setNewToDoText] = useState('');

  const handleNewToDoTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewToDoText(e.target.value);
  };

  const handleCreateNewToDo = (e: FormEvent): void => {
    e.preventDefault();
    createNewToDo(newToDoText);
  };

  return (
    <form className={styles.form} onSubmit={handleCreateNewToDo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewToDoTextChange}
      />
      <button>
        Criar <PlusCircle size={20} color="#f2f2f2" weight="bold" />
      </button>
    </form>
  );
}
