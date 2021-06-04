import { useState } from "react";
import { calculateShipStop } from "../../utils/calculateShipStop";
import { ListShipStop } from "../ListShipStop";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export function SearchShipStop({ requiredProps }) {
  const [valueInputMGLT, setValueInputMGLT] = useState("");
  const [shipStopList, setShipStopList] = useState([]);

  function handleReset() {
    setShipStopList([]);
    setValueInputMGLT("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!valueInputMGLT.trim()) {
      handleReset();
      toast.warning("Enter a valid integer between 1 and 1000000000");
      return;
    }

    if (valueInputMGLT > 1000000000 || valueInputMGLT < 0) {
      toast.error("Invalid number");
      handleReset();
      return;
    }

    const requiredPropsToComponentListShipStop = requiredProps?.map(
      ({ name, MGLT, consumables }) => {
        const requiredPropsList = {
          name,
          stops: calculateShipStop(valueInputMGLT, MGLT, consumables),
        };
        return requiredPropsList;
      }
    );

    setValueInputMGLT("");
    setShipStopList(requiredPropsToComponentListShipStop);
    toast.success("List of stops displayed successfully!");
  }

  return (
    <>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="Logo Star Wars" width="400" />

        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={(e) => setValueInputMGLT(e.target.value)}
          value={valueInputMGLT}
        >
          <input
            type="number"
            placeholder="Distance in mega lights"
            onChange={(e) => setValueInputMGLT(e.target.value)}
            value={valueInputMGLT}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
      <ListShipStop shipStopList={shipStopList} />
    </>
  );
}
