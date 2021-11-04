import { ReactNode } from "react";

export interface FilterElements {
  label?: string | ReactNode;
  name: string | Array<string>;
}
