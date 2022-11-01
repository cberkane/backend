import { keyvalue } from "./generic";

export interface Config {
  port: string;
  databases?: keyvalue<any>;
}
