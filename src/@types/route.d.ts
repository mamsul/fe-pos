interface IRoute {
  name: string;
  path: string;
  element: () => JSX.Element;
  icon?: LucideIcon;
}
