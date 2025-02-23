import { useDispatch, useSelector } from "react-redux";
import css from "./DeleteModale.module.css";
import { deleteContact } from "../../redux/operations";
import { closedModale } from "../../redux/openModalDelete";
import { selectContactId } from "../../redux/selectors";
import toast, { Toaster } from "react-hot-toast";

const succesDelete = () => toast("Contact has been removed");

export const DeleteModale = () => {
  const dispatch = useDispatch();

  const contactId = useSelector(selectContactId);

  const handleDelete = () => {
    dispatch(deleteContact(contactId));
    dispatch(closedModale());
    succesDelete();
  };

  const closedModal = () => {
    dispatch(closedModale());
  };

  return (
    <div className={css.modal}>
      <div className={css.modaleContent}>
        <p className={css.paragraph}>Delete that contact?</p>
        <div className={css.buttons}>
          <button className={css.button} onClick={handleDelete}>
            Yes
          </button>

          <button className={css.button} onClick={closedModal}>
            No
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};
