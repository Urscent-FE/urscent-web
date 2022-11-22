declare module '*.svg' {
  // React.FunctionComponent<React.SVGAttributes<SVGElement>>
  const content: string;
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
