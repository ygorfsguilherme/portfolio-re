/* eslint-disable react-hooks/rules-of-hooks */

import { IMessage } from "interfaces/IMessage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { messageState } from "state/atom";

export function setMessageError() {
  const setMessage = useSetRecoilState(messageState);

  return (err: IMessage) => {
    return setMessage(err);
  };
}

export function messageError() {
  const message = useRecoilValue(messageState);

  return message;
}
