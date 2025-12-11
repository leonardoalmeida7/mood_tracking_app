type AuthText = {
    login: {
        title: string;
        subtitle: string;
        buttonText: string;
        mode: string;
    },
    register: {
        title: string;
        subtitle: string;
        buttonText: string;
        mode: string;
    }
}

export const authText: AuthText = {
  login: {
    title: 'Welcome back!',
    subtitle: 'Login to your account to continue tracking your mood and sleep.',
    buttonText: 'Log In',
    mode: 'register',
  },
  register: {
    title: 'Create an account',
    subtitle: 'Join to track your daily mood and sleep with ease.',
    buttonText: 'Sign Up',
    mode: 'login',
  },
};