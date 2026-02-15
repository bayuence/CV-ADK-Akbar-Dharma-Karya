export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="sanity-studio"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </div>
  );
}
