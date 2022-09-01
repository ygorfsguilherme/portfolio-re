import { IMessage } from "interfaces/IMessage";
import { atom } from "recoil";

export const messageState = atom<IMessage>({
  key: "messageState",
  default: {
    errorState: "sleep",
    errorMessage: ''
  },
});
