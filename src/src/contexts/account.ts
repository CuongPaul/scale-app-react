import { TAction } from ".";

interface IAccountState {
  id: string;
  name: string;
  email: string;
}

const initialAccountState: IAccountState = {
  id: "",
  name: "",
  email: "",
};

export enum ACCOUNT_ACTION {
  UPDATE = "UPDATE",
}

const AccountReducer = (state: IAccountState, action: TAction) => {
  const { type, payload } = action;

  switch (type) {
    case ACCOUNT_ACTION.UPDATE:
      return { ...state, ...payload };

    default:
      throw new Error(`Action type ${type} is undefined`);
  }
};

export { AccountReducer, initialAccountState };