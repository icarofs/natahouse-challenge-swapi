import styles from "./styles.module.scss";

export function ListShipStop() {
  return (
    <div className={styles.container}>
      <div className={styles.listContent}>
        <h3>Stops number</h3>
        <ul>
          <li>
            Millennium Falcon: <small>9</small>
          </li>
          <li>
            Y-wing: <small>74</small>
          </li>
          <li>
            Rebel Transport: <small>11</small>
          </li>
          <li>
            Millennium Falcon: <small>9</small>
          </li>
          <li>
            Y-wing: <small>74</small>
          </li>
          <li>
            Rebel Transport: <small>11</small>
          </li>
          <li>
            Millennium Falcon: <small>9</small>
          </li>
          <li>
            Y-wing: <small>74</small>
          </li>
          <li>
            Rebel Transport: <small>11</small>
          </li>
          <li>
            Millennium Falcon: <small>9</small>
          </li>
        </ul>
      </div>
    </div>
  );
}
