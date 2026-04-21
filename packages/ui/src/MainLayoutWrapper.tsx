import Navbar, { NavbarProps } from "./navbar/Navbar";

type Props = {
  navbar?: NavbarProps;
  children: React.ReactNode
}

export default function MainLayoutWrapper({ navbar, children }: Props) {
  return (
    <>
      <header>
        <Navbar
          variant={navbar?.variant}
          mainRef={navbar?.mainRef}
          hasSidenav={navbar?.hasSidenav}
          enableShrink={navbar?.enableShrink}
        />
      </header>
      {children}
    </>
  );
}