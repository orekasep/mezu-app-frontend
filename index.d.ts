declare module '*.svg' {
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
