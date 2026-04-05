export function StoryRing({ children, className = '' }) {
  return (
    <div className={`p-[2px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] ${className}`}>
      <div className="p-[2px] bg-white rounded-full">
        {children}
      </div>
    </div>
  );
}
