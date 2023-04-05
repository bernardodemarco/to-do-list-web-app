import styles from './styles/App.module.css';

import { Header } from './components/Header';
import { ToDoForm } from './components/ToDoForm';
import { ToDoList } from './components/ToDoList';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>
        <ToDoForm />
        <ToDoList />
      </main>
    </>
  );
}
