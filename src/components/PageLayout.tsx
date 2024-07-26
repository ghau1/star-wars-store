import {
  Fade,
} from '@carbon/icons-react';
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent
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
          {/* <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            onSideNavBlur={onClickSideNavExpand}
            href="#main-content"
          >
            <SideNavItems>
              <SideNavMenu renderIcon={Fade} title="Category title">
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                renderIcon={Fade}
                title="Category title"
                isActive={true}
              >
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem
                  aria-current="page"
                  href="https://www.carbondesignsystem.com/"
                >
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade} title="Category title">
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="https://www.carbondesignsystem.com/">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink
                renderIcon={Fade}
                href="https://www.carbondesignsystem.com/"
              >
                Link
              </SideNavLink>
              <SideNavLink
                renderIcon={Fade}
                href="https://www.carbondesignsystem.com/"
              >
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav> */}
        </Header>
        {children}
      </>
    )}
  />
);
