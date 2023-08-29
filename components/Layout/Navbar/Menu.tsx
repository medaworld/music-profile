import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import SocialsList from '../../common/SocialsList/SocialsList';
import {
  MenuContainer,
  HamburgerButton,
  HamburgerBox,
  HamburgerBar,
  SlideMenu,
  NavLinks,
  SocialWrapper,
} from './MenuStyles';
import LoadedPostsStateContext from '@/context/loadedPostsState/LoadedPostsStateContext';
import useScrollToSection from '@/hooks/useScrollToSection';

export default function Menu() {
  const { NavLinkList } = useContext(LoadedPostsStateContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const scrollTo = useScrollToSection();

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      scrollTo(sectionId);
    }, 300);
  };

  const menuFocusablesRef = useRef<any[]>([]);
  const firstFocusableElRef = useRef<HTMLElement | null>(null);
  const lastFocusableElRef = useRef<HTMLElement | null>(null);

  const setFocusables = useCallback(() => {
    if (navRef.current) {
      menuFocusablesRef.current = [
        buttonRef.current,
        ...Array.from(navRef.current.querySelectorAll('a')),
      ];
    }
    firstFocusableElRef.current = menuFocusablesRef.current[0];
    lastFocusableElRef.current =
      menuFocusablesRef.current[menuFocusablesRef.current.length - 1];
  }, [navRef, buttonRef]);

  const handleBackwardTab = useCallback(
    (e: any) => {
      if (document.activeElement === firstFocusableElRef.current) {
        e.preventDefault();
        lastFocusableElRef.current?.focus();
      }
    },
    [firstFocusableElRef, lastFocusableElRef]
  );

  const handleForwardTab = useCallback(
    (e: any) => {
      if (document.activeElement === lastFocusableElRef.current) {
        e.preventDefault();
        firstFocusableElRef.current?.focus();
      }
    },
    [firstFocusableElRef, lastFocusableElRef]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      switch (e.key) {
        case 'Escape':
        case 'Esc': {
          setMenuOpen(false);
          break;
        }

        case 'Tab': {
          if (
            menuFocusablesRef.current &&
            menuFocusablesRef.current.length === 1
          ) {
            e.preventDefault();
            break;
          }
          if (e.shiftKey) {
            handleBackwardTab(e);
          } else {
            handleForwardTab(e);
          }
          break;
        }

        default: {
          break;
        }
      }
    },
    [handleBackwardTab, handleForwardTab]
  );

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [onKeyDown, setFocusables]);

  return (
    <MenuContainer>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef}>
        <HamburgerButton onClick={toggleMenu} ref={buttonRef} aria-label="Menu">
          <HamburgerBox>
            <HamburgerBar menuOpen={menuOpen} />
            <HamburgerBar menuOpen={menuOpen} />
            <HamburgerBar menuOpen={menuOpen} />
          </HamburgerBox>
        </HamburgerButton>

        <SlideMenu
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {NavLinkList && (
              <NavLinks>
                {NavLinkList.map((navLink, key) => (
                  <li key={key} onClick={() => scrollToSection(navLink.path)}>
                    {navLink.title}
                  </li>
                ))}
              </NavLinks>
            )}
            <SocialWrapper>
              <SocialsList />
            </SocialWrapper>
          </nav>
        </SlideMenu>
      </div>
    </MenuContainer>
  );
}
