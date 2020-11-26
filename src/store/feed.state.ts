import { atom } from "jotai";
import { LIGHT_MODE } from "../config/constants.config";

export const mode = atom<"light" | "dark">(LIGHT_MODE);
export const menuIsOpen = atom<boolean>(false);

const feedState = atom((get) => ({
  mode: get(mode),
  menuIsOpen: get(menuIsOpen)
}));

export default feedState;
