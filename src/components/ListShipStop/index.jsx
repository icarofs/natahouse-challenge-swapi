import styles from "./styles.module.scss";

export function ListShipStop({ shipStopList }) {
  return (
    <div className={styles.container}>
      <div className={styles.listContent}>
        {shipStopList.length ? (
          <>
            <h3>Stops number</h3>

            {shipStopList.map((item) => (
              <ul key={item.name}>
                <li>
                  {item.name}: <small>{item.stops || 0}</small>
                </li>
              </ul>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
}
