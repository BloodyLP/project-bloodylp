// =====================================================
// BUS CORE COMPONENT
//
// Component: CommandBarItem
//
// =====================================================

type Props = {
  children: React.ReactNode;
};

export default function CommandBarItem({
  children,
}: Props) {
  return (
    <span
      className="
        font-ui

        text-xs

        font-semibold

        uppercase

        tracking-[0.18em]

        text-zinc-300
      "
    >
      {children}
    </span>
  );
}