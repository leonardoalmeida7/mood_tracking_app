
import logo from '../../assets/images/logo.svg';
import { AccountContainer } from '../../components/AccountContainer';

import styles from './styles.module.css';

export const AuthPage = () => {
  type AuthMode = 'login' | 'register';
  const path: AuthMode = window.location.pathname.split('/')[3] as AuthMode;
    
  return (
    <div className={`${styles.container} d-flex flex-column justify-content-center gap-4`}>
      <div className='text-center'>
        <img src={logo} alt='Logo' />
      </div>
      <AccountContainer route={path} />
    </div>
  );
};
