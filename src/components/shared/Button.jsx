const signatureGradient = 'bg-instagram';

export function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: `${signatureGradient} text-white font-semibold rounded-2xl shadow-soft-md hover:shadow-soft-lg transform hover:-translate-y-0.5 transition-all duration-300`,
    secondary: 'bg-surface-container-high text-on-surface font-semibold rounded-xl shadow-sm',
    outline: 'border border-outline-variant text-on-surface font-semibold rounded-xl',
    ghost: 'text-on-surface-variant hover:bg-surface-container-low font-semibold rounded-xl',
  };

  return (
    <button
      className={`px-5 py-3 rounded-2xl transition-all duration-200 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
