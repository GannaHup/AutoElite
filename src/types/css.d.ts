/**
 * Type declarations for CSS module imports
 * This allows TypeScript to recognize imports of CSS files without requiring explicit type definitions
 */
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
