import * as React from 'react';
import './Button.scss';
export interface Props {
  /** button显示字段  */
  label: string;
  /** button OnClick函数  */
  onClick: () => void;
  /**
   * Button是否Disable
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
export const Button = (props: Props) => {
  const { label, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button_disabled' : '';
  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{label}</span>
    </div>
  );
};
