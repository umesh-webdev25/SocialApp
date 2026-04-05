export function Avatar({ src, alt, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    '2xl': 'w-24 h-24',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover ${className}`}
    />
  );
}

export function AvatarRing({ src, alt, size = 'md', children, className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  return (
    <div className={`p-[2px] rounded-full bg-gradient-to-tr from-primary via-secondary to-tertiary ${className}`}>
      {src ? (
        <img src={src} alt={alt} className={`${sizes[size]} rounded-full object-cover border-2 border-white`} />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-white flex items-center justify-center`}>
          {children}
        </div>
      )}
    </div>
  );
}
