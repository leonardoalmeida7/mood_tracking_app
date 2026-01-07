import { useRegister } from "../../contexts/RegisterContext";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { FormGroup } from "../FormGroup";
import AvatarPlaceholder from "../../assets/images/avatar-placeholder.svg";

import { DefaultButton } from "../../ui/DefaultButton";

import { useFormSubmit } from "../../Hooks/useFormSubmit";

import styles from "./styles.module.css";

interface OnBoardingContainerProps {
  title: string;
  description: string;
  isUpdate?: boolean;
  onSuccess?: () => void;
}

export const OnBoardingContainer = ({ title, description, isUpdate = false, onSuccess }: OnBoardingContainerProps) => {
  const { name, setName, profileImage, setProfileImage } =
    useRegister();
  const { user } = useContext(AuthContext);

  const { formSubmitRegister, formSubmitUpdate, errorMessage } = useFormSubmit();

  // Initialize form with current user data when in update mode
  useEffect(() => {
    if (isUpdate && user) {
      setName(user.name || '');
    }
  }, [isUpdate, user, setName]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isUpdate) {
      formSubmitUpdate(e, onSuccess);
    } else {
      formSubmitRegister(e);
    }
  };


  return (
    <div className={styles.container}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <FormGroup
          labelText="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name here..."
          errorMessage={errorMessage.nameField}
        />
        <div className="d-flex  gap-3">
          <img
            src={
              profileImage
                ? URL.createObjectURL(profileImage)
                : user?.profileImage 
                  ? `http://localhost:5000${user.profileImage}`
                  : AvatarPlaceholder
            }
            alt="Profile"
            className={`${styles.profileImage} align-self-start`}
          />
          <div className="">
            <p className="m-0">Upload Image</p>
            <p className={`${styles.smallText} m-0`}>Max 250KB, PNG or JPEG</p>
            <FormGroup 
              labelText="Upload"
              className={styles.fileLabel}
              type="file"
              id="profileImage"
              name="profileImage"
              accept=".png, .jpeg, .jpg"
              onChange={(e) =>
                setProfileImage(e.target.files ? e.target.files[0] : null)
              }
              hidden
            />
          </div>
        </div>
        <DefaultButton type="submit">{isUpdate ? 'Update Profile' : 'Start Tracking'}</DefaultButton>
      </form>
    </div>
  );
};
