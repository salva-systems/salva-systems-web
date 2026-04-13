export function Container({ children, className }: any) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)}>
      {children}
    </div>
  );
}