import { Car, Globe, Rocket, Tree, User, Video } from '@carbon/icons-react';
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
} from '@carbon/react';
import { PropsWithChildren } from 'react';

export const PageLayout = ({ children }: PropsWithChildren) => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="Star Wars Store Name">
          <SkipToContent />
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            aria-expanded={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="Star Wars">
            Store
          </HeaderName>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            onSideNavBlur={onClickSideNavExpand}
            href="#main-content"
          >
            <SideNavItems>
              <SideNavLink renderIcon={User} href="#">
                People
              </SideNavLink>
              <SideNavLink renderIcon={Globe} href="#">
                Planets
              </SideNavLink>
              <SideNavLink renderIcon={Video} href="#">
                Films
              </SideNavLink>
              <SideNavLink renderIcon={Tree} href="#">
                Species
              </SideNavLink>
              <SideNavLink renderIcon={Car} href="#">
                Vehicles
              </SideNavLink>
              <SideNavLink renderIcon={Rocket} href="#">
                Starships
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
        {children}
      </>
    )}
  />
);
