import styles from './styles.module.css';

type HoursOptionsProps = {
  selected: boolean;
  onClick: () => void;
  label: string;
};

export const HoursOptions = ({ label, selected, onClick }: HoursOptionsProps) => {
  const handleContainerClick = () => {
    if (!selected) onClick();
  };

  return (
    <div
      className={`${styles.container} d-flex align-items-center gap-3 mb-3 p-3 ${selected ? styles.active : ""}`}
      onClick={handleContainerClick}
    >
      <input
        type="radio"
        name="hours"
        id={label}
        checked={selected}
        onChange={onClick}
        onClick={e => e.stopPropagation()} // Evita duplo disparo
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};
