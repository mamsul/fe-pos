interface ILogin {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  roleId: number;
  email: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}

interface IAuthState {
  user: ILogin | null;
  login: () => void;
  logout: (data: ILogin) => void;
}
