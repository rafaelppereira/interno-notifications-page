interface NotificationIconProps {
  source: string
  alt?: string
}

export function NotificationAvatar({ source, alt }: NotificationIconProps) {
  return (
    <img
      alt={alt}
      src={source}
      className="pointer-events-none size-16 shrink-0 select-none rounded-full border-2 object-cover"
    />
  )
}
