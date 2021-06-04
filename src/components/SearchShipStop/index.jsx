import { ListShipStop } from "../ListShipStop";
import styles from "./styles.module.scss";

export function SearchShipStop() {
  return (
    <>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="Logo Star Wars" width="400" />

        <form className={styles.form}>
          <input type="number" />
          <button type="submit">Search</button>
          <button type="button">Reset</button>
        </form>
      </div>

      <ListShipStop />
    </>
  );
}
