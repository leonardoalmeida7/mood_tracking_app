import { useRegister } from "../../contexts/RegisterContext";

import { FormGroup } from "../FormGroup";
import AvatarPlaceholder from "../../assets/images/avatar-placeholder.svg";

import { DefaultButton } from "../../ui/DefaultButton";

import { useFormSubmit } from "../../utils/FormSubmit";

import styles from "./styles.module.css";

export const OnBoardingContainer = () => {
  const { name, setName, profileImage, setProfileImage } =
    useRegister();


  const { formSubmitRegister, errorMessage } = useFormSubmit();


  return (
    <div className={styles.container}>
      <div>
        <h1>Personalize your experience</h1>
        <p>Add your name and a profile picture to make Mood yours.</p>
      </div>
      <form onSubmit={(e) => formSubmitRegister(e)}>
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
              accept=".png, .jpeg"
              onChange={(e) =>
                setProfileImage(e.target.files ? e.target.files[0] : null)
              }
              hidden
            />
          </div>
        </div>
        <DefaultButton type="submit">Start Tracking</DefaultButton>
      </form>
    </div>
  );
};
