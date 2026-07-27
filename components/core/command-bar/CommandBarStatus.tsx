// =====================================================
// BUS CORE COMPONENT
//
// Component: CommandBarStatus
//
// =====================================================

type Props = {
  label: string;
  color?: "green" | "yellow" | "red";
};

const colors = {
  green: "bg-lime-400",
  yellow: "bg-yellow-400",
  red: "bg-red-500",
};

export default function CommandBarStatus({
  label,
  color = "green",
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-40 ${colors[color]}`}
        />

        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${colors[color]}`}
        />
      </span>

      <span
        className="
          font-ui

          text-xs

          font-bold

          uppercase

          tracking-[0.18em]

          text-white
        "
      >
        {label}
      </span>
    </div>
  );
}