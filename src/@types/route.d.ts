interface IRoute {
  path: string;
  name: string;
  icon?: LucideIcon;
  element: () => JSX.Element;
}
