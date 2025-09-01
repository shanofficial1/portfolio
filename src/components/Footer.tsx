export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container">© {new Date().getFullYear()} • Built with React, Vite, Tailwind & shadcn.</div>
    </footer>
  );
}
