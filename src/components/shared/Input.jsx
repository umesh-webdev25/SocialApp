import { Icon } from './Icon';

export function Input({ icon, placeholder, type = 'text', className = '', ...props }) {
  return (
    <div className="relative">
      {icon && (
        <Icon
          name={icon}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-surface border border-outline-variant rounded-xl py-3 px-4 text-on-surface focus:ring-2 focus:ring-primary/30 placeholder:text-on-surface-variant/50 text-sm ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
    </div>
  );
}
