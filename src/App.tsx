import styles from './styles/App.module.css';

import { Header } from './components/Header';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.contentWrapper}>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </form>
        <div>
          <header></header>
        </div>
      </main>
    </>
  );
}
