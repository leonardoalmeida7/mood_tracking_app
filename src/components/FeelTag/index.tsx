import styles from "./styles.module.css";

type FeelTagProps = {
  selected: boolean;
  onSelect: () => void;
  feel: string;
  id: string;
};

export const FeelTag = ({ feel, selected, onSelect, id }: FeelTagProps) => {
  const handleContainerClick = () => {
    onSelect();
  };

  return (
    <div
      className={`${styles.tag} d-flex p-2 gap-2 ${selected ? styles.active : ""}`}
      onClick={handleContainerClick}
    >
      <input
        type="checkbox"
        name="feeling"
        id={id}
        checked={selected}
        readOnly
        onClick={e => e.stopPropagation()} // Evita duplo disparo
      />
      <label htmlFor={id}>{feel}</label>
    </div>
  );
};
