import type { ReactElement } from 'react';
import type { IActivePathOptions } from './Header';
import { AboutMobileNav, MediaMobileNav, MinistriesMobileNav, NewcomerMobileNav, ResourcesMobileNav } from './components/MobileNavOptions/MobileNavOptions';

export const mobileNavMenuMap: Record<IActivePathOptions, ReactElement> = {
  newcomers: <NewcomerMobileNav />,
  about: <AboutMobileNav />,
  ministries: <MinistriesMobileNav />,
  media: <MediaMobileNav />,
  resources: <ResourcesMobileNav />,
};
