
declare module "*.jpg" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.png" {
  const value: import("next/image").StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}



