import * as numeral from "numeral";

export const changeNumberFormat = (value?: any) => {
  return numeral.default(value).format("0,0.00");
};
