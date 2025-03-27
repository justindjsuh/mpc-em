import clsx from 'clsx';
import Image from 'next/image';
import styles from './Button.module.css';

interface IButtonProps {
  text: string;
  onClick?: () => void;
  theme: 'light' | 'dark';
  iconTheme: 'light' | 'dark';
  filled?: boolean;
  isDisabled?: boolean;
  showIcon?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
  theme,
  iconTheme,
  filled = false,
  isDisabled = false,
  showIcon = true,
}) => {
  return (
    <div className={clsx(styles.buttonWrapper, {
      [styles.dark!]: theme === 'dark',
      [styles.lightFilled!]: filled && theme === 'light',
      [styles.darkFilled!]: filled && theme === 'dark',
      [styles.hoverAnimation!]: !isDisabled,
      // [styles.disabledBtn!]: isDisabled,
    })}
    >
      <button type="button" onClick={onClick} disabled={isDisabled}>{text}</button>
      {showIcon
        ? (
            <Image
              aria-hidden
              src={iconTheme === 'dark' ? '/arrow-up-right-dark.svg' : '/arrow-up-right-light.svg'}
              alt="Arrow Facing Top Right"
              width={21}
              height={21}
            />
          )
        : null}
    </div>
  );
};

export default Button;
