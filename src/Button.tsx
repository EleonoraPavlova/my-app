import React from 'react';


type ButtonProps = {
  name: string;
  callBack: () => void;
  additionalClass?: string;
}

export const ButtonComponent = (props: ButtonProps) => {
  const onClickHandler = () => {
    return props.callBack();
  };

  return (<button type="button" onClick={onClickHandler} className={`button ${props.additionalClass}`} > {props.name}</ button >)
}

