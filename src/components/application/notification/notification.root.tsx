import { ReactNode } from 'react'

interface NotificationRootProps {
  hasNew?: boolean
  children: ReactNode
}

export function NotificationRoot({
  hasNew = false,
  children,
}: NotificationRootProps) {
  return (
    <div
      className={`${hasNew && 'bg-zinc-100'} flex items-start gap-6 rounded-md px-5 py-3`}
    >
      {children}
    </div>
  )
}
