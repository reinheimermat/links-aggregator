import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function LinkButton({ children, ...props }: LinkButtonProps) {
  return (
    <a
      {...props}
      className="w-full rounded-3xl border border-zinc-700 bg-zinc-950 px-6 py-4 text-center text-zinc-100"
    >
      {children}
    </a>
  )
}
