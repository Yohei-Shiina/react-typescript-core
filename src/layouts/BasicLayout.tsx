type BasicLayoutProps = {
  children: React.ReactNode;
};

export function BasicLayout({ children }: BasicLayoutProps) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
