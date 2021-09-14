export interface IInputMaskOptions {
  prefix?: string;
  suffix?: string;
  allowMinus: boolean;

  numericInput?: boolean;
  rightAlign?: boolean;
  radixPoint?: string;
  groupSeparator?: string;
}

export type TCurrencyTypes = 'million-currency' | 'currency';
export type TPercentageTypes = 'percentage';
