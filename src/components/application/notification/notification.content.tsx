import { ReactNode } from 'react'

interface NotificationContentProps {
  text: string
  date: string
  children?: ReactNode
}

export function NotificationContent({
  text,
  date,
  children,
}: NotificationContentProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-md">{text}</h1>
      <time className="text-sm text-zinc-500">{date}</time>

      {children}
    </div>
  )
}
