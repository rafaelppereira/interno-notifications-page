interface NotificationCommentProps {
  text: string
}

export function NotificationComment({ text }: NotificationCommentProps) {
  return (
    <div className="mt-2 rounded-md border p-3">
      <p className="text-md text-zinc-500">{text}</p>
    </div>
  )
}
