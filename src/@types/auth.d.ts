interface ILogin {
  email: string;
  password: string;
}

interface IAuthState {
  user: ILogin | null;
  login: () => void;
  logout: (data: ILogin) => void;
}
