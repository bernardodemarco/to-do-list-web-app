import styles from './ToDoForm.module.css';

import { PlusCircle } from '@phosphor-icons/react';

export function ToDoForm(): JSX.Element {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={20} color="#f2f2f2" weight="bold" />
      </button>
    </form>
  );
}
