import styles from "./styles.module.css";

type MoodInputProps = {
  mood: string;
  icon: string;
  alt: string;
  selected: boolean;
  onSelect: () => void;
};

export const MoodInput = ({ mood, icon, alt, selected, onSelect }: MoodInputProps) => {
  // Permite clicar no container para ativar o radio
  const handleContainerClick = () => {
    if (!selected) onSelect();
  };

  return (
    <div
      className={`${styles.container} d-flex align-items-center justify-content-between py-2 px-3 my-3 ${selected ? styles.active : ""}`}
      onClick={handleContainerClick}
    >
      <div className="d-flex align-items-center gap-2">
        <input
          type="radio"
          name="mood"
          id={mood}
          checked={selected}
          onChange={onSelect}
          onClick={e => e.stopPropagation()} // Evita duplo disparo
        />
        <label htmlFor={mood}>{mood}</label>
      </div>
      <img src={icon} alt={alt} />
    </div>
  );
};
