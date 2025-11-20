const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c8ff4f]/70 ring-offset-transparent disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  solid: 'bg-[#c8ff4f] text-[#111d16] shadow-[0_15px_30px_rgba(200,255,79,0.25)] hover:shadow-[0_20px_40px_rgba(200,255,79,0.35)]',
  ghost:
    'bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]',
}

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-7 py-3.5',
}

const Button = ({ children, variant = 'solid', size = 'md', className = '', ...props }) => {
  const variantClasses = variants[variant] ?? variants.solid
  const sizeClasses = sizes[size] ?? sizes.md

  return (
    <button className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}

export default Button

