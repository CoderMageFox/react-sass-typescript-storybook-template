import React from 'react';
import "./button.scss"
interface IProps {
  /**
   * Text for the button
   */
  text: string;
}

export const ExampleButton = (props: IProps) => {
  return (
    <a className='f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple test'>
      {props.text}
    </a>
  );
};
