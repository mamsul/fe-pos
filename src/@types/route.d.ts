interface IRoute {
  path: string;
  name: string;
  icon?: LucideIcon;
  element: () => JSX.Element;
}

interface IPageRoute extends Pick<IRoute, keyof IRoute> {
  children?: Pick<IRoute, 'path' | 'name' | 'element'>[];
}
