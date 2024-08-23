import css from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

export default function Contact({ item, onDelete }) {
  return (
    <li className={css.container}>
      <div className={css.containerData}>
        <div>
          <AiOutlineUser className={css.icon} />
          <p className={css.itemEl}>{item.name}</p>
        </div>
        <div>
          <FiPhone />
          <p className={css.itemEl}>{item.number}</p>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  );
}
