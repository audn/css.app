import { useRouter } from 'next/router';
import { SyntheticEvent } from 'react';
import { Button } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import LoadingIcon from '../../misc/LoadingIcon';

function PrimaryButton({
  route,
  onClick,
  label,
  disabled,
  isLoading,
  className,
}: Button.Base) {
  const router = useRouter();
  function handleClick(e: SyntheticEvent) {
    if (route) {
      router.push(route);
    } else if (onClick) onClick(e);
  }
  return (
    <button
      disabled={disabled}
      onClick={(e) => handleClick(e)}
      className={concat(
        className ? className : '',
        'flex items-center justify-center w-full px-8 py-2 font-semibold text-white bg-indigo-500 outline-none active:opacity-90 ring-0 focus:ring-types-150 focus:ring-4 rounded-xl disabled:bg-types-100 hover:bg-indigo-600 animate disabled:opacity-50',
      )}
    >
      {isLoading ? <LoadingIcon /> : label}
    </button>
  );
}

export default PrimaryButton;
