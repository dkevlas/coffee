import { IcoSearch } from '@/icons/Icons';
import { ListNavProps } from '@/templates/navbar/NavbarTemplate';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default function NavDesktop({ li, className }: ListNavProps): ReactNode {
  return (
    <div className={`${className} flex justify-between`}>
      <h2 className="text-cloud-white font-bold select-none">COFFEE</h2>
      <ul className="flex gap-8">
        {li &&
          li.map((item, index) => (
            <Link
              key={index}
              className="text-cloud-white hover:underline"
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
      </ul>
      <IcoSearch className="fill-cloud-white" />
    </div>
  );
}
