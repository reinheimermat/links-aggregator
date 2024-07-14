interface TechCardProps {
  icon: JSX.Element
  title: string
  description: string
}

export function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="flex h-[calc(50vw-30px)] max-h-72 w-[calc(50%-6px)] flex-col items-center justify-center gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 text-center">
      {icon}
      <span className="text-xl font-semibold text-zinc-100">{title}</span>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  )
}
