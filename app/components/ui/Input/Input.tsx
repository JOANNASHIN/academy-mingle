import { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import './Input.scss';

interface IProps {
  ref?: any;
  type?: string;
  placeholder?: string;
  value: string;
  classes?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ononKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  addBefore?: React.ReactElement;
  addAfter?: React.ReactElement;
}

const InputBefore = (el: React.ReactElement) => {
  return <>{el}</>;
};

const InputAfter = (el: React.ReactElement) => {
  return <>{el}</>;
};

const InputWrapper = (props: IProps) => {
  const { value, addBefore, addAfter, onClear } = props;

  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleClear = () => {
    if (onClear && typeof onClear === 'function') {
      onClear();
      inputEl.current!.focus();
    }
  };

  return (
    <div className="input-container input-border">
      {addBefore && InputBefore(addBefore)}
      <InputDefault ref={inputEl} {...props} />
      {value && value.length && onClear && typeof onClear === 'function' && (
        <button type="button" className="clear" onClick={handleClear}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      {addAfter && InputAfter(addAfter)}
    </div>
  );
};

const InputDefault = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { type = 'text', classes = '', placeholder, value, onChange, onKeyUp, ononKeyDown } = props;

  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyUp && typeof onKeyUp === 'function') onKeyUp(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (ononKeyDown && typeof ononKeyDown === 'function') ononKeyDown(e);
  };

  return (
    <input
      ref={ref ? ref : inputEl}
      className={`input ${classes}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
    />
  );
});

const Input = (props: IProps) => {
  const { addBefore, addAfter, onClear } = props;

  if (addBefore || addAfter || onClear) {
    return <InputWrapper {...props} />;
  }

  return <InputDefault classes="input-border" {...props} />;
};

export default Input;
