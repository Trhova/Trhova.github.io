export function ExternalLink({
  href,
  children,
  className = "",
  ariaLabel
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const commonProps = ariaLabel ? { "aria-label": ariaLabel } : {};

  return (
    <a
      href={href}
      className={className}
      {...commonProps}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

