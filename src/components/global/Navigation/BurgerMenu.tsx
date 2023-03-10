import classNames from "classnames";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type BurgerMenuProps = {
  list: Array<{ name: string; link: string }>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const BurgerMenu = ({ list, open, setOpen }: BurgerMenuProps) => {
  return (
    <div
      className={classNames(
        "w-screen h-screen top-0 right-0 text-black justify-center items-center fixed flex flex-col z-40 transition-all duration-300 ease-in-out",
        {
          "bg-transparent": !open,
          "bg-white/90": open,
          "pointer-events-none": !open,
          "pointer-events-auto": open,
        }
      )}
    >
      {list.map(({ name, link }, i) => (
        <Link
          href={link}
          key={name}
          onClick={() => setOpen(false)}
          className={classNames(
            "text-3xl font-semibold my-2 transition-all duration-300 ease-in-out",
            {
              "text-slate-900": open,
              "text-transparent": !open,
            }
          )}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
