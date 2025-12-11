import logo from "../../assets/images/logo.svg";
import { OnBoardingContainer } from "../../components/OnBoardingContainer";

import styles from './styles.module.css';

export const OnBoardingPage = () => {
  return (
    <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center gap-4`}>
      <img src={logo} alt="Logo" />
      <OnBoardingContainer />
    </div>
  )
}


