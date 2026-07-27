// =====================================================
// BDS COMPONENT
// Divider
//
// Version: 1.0
//
// Foundation Divider
//
// Bloody Design System
// =====================================================

interface DividerProps {
  width?: "sm" | "md" | "lg";

  variant?: "solid" | "gradient";

  className?: string;
}

export default function Divider({
  width = "md",

  variant = "gradient",

  className = "",
}: DividerProps) {

  const widths = {

    sm: "w-12",

    md: "w-20",

    lg: "w-28",
  };

  const styles = {

    solid: "bg-lime-400/40",

    gradient: `
      bg-gradient-to-r

      from-transparent

      via-lime-400

      to-transparent
    `,
  };

  return (

    <div

      className={`
        h-px

        rounded-full

        ${widths[width]}

        ${styles[variant]}

        ${className}
      `}
    />

  );

}