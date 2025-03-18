import clsx from 'clsx';
import Image from 'next/image';
import styles from './Button.module.css';

type IButtonProps = {
  text: string;
  onClick: () => void;
  theme: 'light' | 'dark';
  fill?: boolean;
};

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  onClick,
  theme,
  fill = false,
}) => {
  return (
    <div className={clsx(styles.buttonWrapper, {
      [styles.dark!]: theme === 'dark',
      [styles.filled!]: fill,
    })}
    >
      <button type="button" onClick={onClick}>{text}</button>
      <Image
        aria-hidden
        src={theme === 'dark' ? '/arrow-up-right-dark.svg' : '/arrow-up-right-light.svg'}
        alt="Arrow Facing Top Right"
        width={22}
        height={22}
      />
    </div>
  );
};

export default Button;
