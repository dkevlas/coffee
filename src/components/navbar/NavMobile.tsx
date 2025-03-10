import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ListNavProps } from '@/templates/navbar/NavbarTemplate';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IcoMenu, IcoSearch } from '@/icons/Icons';

export default function NavMobile({ li, className }: ListNavProps): ReactNode {
  return (
    <div className={`${className} flex justify-between`}>
      <h2 className="order-2 text-cloud-white font-bold">COFFEE</h2>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <IcoMenu className="fill-cloud-white select-none" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:hidden bg-dark-brown">
          {li &&
            li.map((value, index) => (
              <DropdownMenuItem
                key={index}
                className="text-light-beige cursor-pointer"
              >
                <Link to={value.link}> {value.name} </Link>
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <IcoSearch className="order-3 cursor-pointer fill-cloud-white" />
    </div>
    // tengo este componente de shadcn ui y cuando doy click en el menu, se abre nueva ventana pero siempre se abre abajo del menu pero en el centro, y yo no quiero que aparezca en el centro abajo del menu, quiero que esté
  );
}
