import { ReactNode } from 'react';
import { NavigationFast } from '@/templates/footer/NavigationFast';
import {
  IcoFacebook,
  IcoInstagram,
  IcoLinkedin,
  IcoTwitter,
} from '@/icons/IconsMediaSocial';

export function LinksFooter(): ReactNode {
  return (
    <div className="grid grid-cols-2 gap-2 justify-items-center gap-y-12 sm:grid-cols-4 sm:w-full">
      {NavigationFast &&
        NavigationFast.map((values, index) => (
          <ul key={index} className="flex flex-col gap-3 w-[110px]">
            <b className="text-sm">{values.title}</b>
            {values.links.map((v, i) => (
              <li className="text-xs" key={i}>
                {v.value}
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export function SocialMediaFooter(): ReactNode {
  const styles: string = 'fill-pale-beige w-[20px] h-[20px]';
  return (
    <div className="flex flex-col px-4 text-center items-center gap-2">
      <h2 className="text-nowrap w-full md:text-start text-sm font-bold">
        SOCIAL MEDIA
      </h2>
      <div className="flex md:grid md:grid-cols-2 lg:flex gap-4">
        <IcoTwitter className={`${styles}`} />
        <IcoFacebook className="fill-pale-beige w-[20px] h-[20px]" />
        <IcoInstagram className={`${styles}`} />
        <IcoLinkedin className={`${styles}`} />
      </div>
    </div>
  );
}
