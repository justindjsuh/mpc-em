import clsx from 'clsx';
import Image from 'next/image';
import styles from './Button.module.css';

interface IButtonProps {
  text: string;
  onClick: () => void;
  theme: 'light' | 'dark';
  iconTheme: 'light' | 'dark';
  filled?: boolean;
  isDisabled?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
  theme,
  iconTheme,
  filled = false,
  isDisabled = false,
}) => {
  return (
    <div className={clsx(styles.buttonWrapper, {
      [styles.dark!]: theme === 'dark',
      [styles.filled!]: filled,
      [styles.hoverAnimation!]: !isDisabled,
      // [styles.disabledBtn!]: isDisabled,
    })}
    >
      <button type="button" onClick={onClick} disabled={isDisabled}>{text}</button>
      <Image
        aria-hidden
        src={iconTheme === 'dark' ? '/arrow-up-right-dark.svg' : '/arrow-up-right-light.svg'}
        alt="Arrow Facing Top Right"
        width={22}
        height={22}
      />
    </div>
  );
};

export default Button;
