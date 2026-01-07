import { OnBoardingContainer } from "../OnBoardingContainer";

import styles from "./styles.module.css";

interface UpdateProfileModalProps {
  onClose?: () => void;
}

export const UpdateProfileModal = ({ onClose }: UpdateProfileModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div className={styles.container} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        {onClose && (
          <button 
            className={styles.closeButton}
            onClick={onClose}
            type="button"
            aria-label="Close modal"
          >
            ×
          </button>
        )}
        <OnBoardingContainer
          title="Update your profile"
          description="Personalize your account with your name and photo."
          isUpdate={true}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
};
