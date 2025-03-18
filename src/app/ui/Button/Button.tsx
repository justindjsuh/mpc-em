import clsx from 'clsx';
import Image from 'next/image';
import styles from './Button.module.css';

type IButtonProps = {
  text: string;
  onClick: () => void;
  darkMode?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
  darkMode = false,
}) => {
  return (
    <div className={clsx(styles.buttonWrapper, {
      [styles.dark!]: darkMode,
    })}
    >
      <button type="button" onClick={onClick}>{text}</button>
      <Image
        aria-hidden
        src="/arrow-up-right.svg"
        alt="Arrow Facing Top Right"
        width={22}
        height={22}
      />
    </div>
  );
};

export default Button;
