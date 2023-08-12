import clsx from 'clsx';

export interface IIcon {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export const Icon = ({
  name,
  color = 'black',
  size = 16,
  className = '',
}: IIcon) => (
  <svg
    className={clsx(`icon icon-${name}`, className)}
    stroke={color}
    width={size}
    height={size}
  >
    <use xlinkHref={`/icons.svg#${name}`} />
  </svg>
);
