import React from "react";

export default function Logo({
  size = "md",
  withName = true,
  subtitle = null,
  className = "",
  onClick = null,
}) {
  const isSmall = size === "sm";
  const boxSize = isSmall ? "w-8 h-8" : "w-9 h-9";
  const sqSize = isSmall ? "w-4.5 h-4.5" : "w-5 h-5";
  const textSize = isSmall ? "text-[9px]" : "text-[10px]";

  const content = (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Custom Dual-Square Geometric Logo Mark */}
      <div className={`relative ${boxSize} shrink-0 flex items-center justify-center`}>
        <div
          className={`absolute top-0 left-0 ${sqSize} rounded-md bg-gradient-to-br from-orange-500 to-amber-600 shadow-sm transform -rotate-3 group-hover:-rotate-6 transition-transform duration-200`}
        />
        <div
          className={`absolute bottom-0 right-0 ${sqSize} rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 border border-[#0d111a] shadow-sm transform rotate-6 group-hover:rotate-12 transition-transform duration-200`}
        />
        <div
          className={`relative z-10 ${textSize} font-bold text-white tracking-tighter font-mono select-none`}
        >
          SK
        </div>
      </div>

      {withName && (
        <div className="leading-tight">
          <span className="font-mono text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors block">
            Suraj Kumar
          </span>
          {subtitle && (
            <span className="text-[11px] text-slate-400 font-mono block leading-none mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="text-left focus:outline-none cursor-pointer bg-transparent border-0 p-0"
      >
        {content}
      </button>
    );
  }

  return content;
}
