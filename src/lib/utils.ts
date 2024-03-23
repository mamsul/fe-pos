import { AxiosError } from 'axios';
import clsx, { ClassValue } from 'clsx';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const rupiah = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(price)
    .replace(/(\.|,)00$/g, '');
};

export const setToken = ({
  accessToken,
  refreshToken,
}: Pick<IUser, 'accessToken' | 'refreshToken'>) => {
  Cookies.set('accessToken', accessToken, {
    secure: true,
  });
  Cookies.set('refreshToken', refreshToken, {
    secure: true,
  });
};

export const removeToken = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const generateErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    const errMessage = error.response?.data?.message;
    return errMessage?.error ?? errMessage;
  } else {
    return 'Failed, something wrong!';
  }
};
