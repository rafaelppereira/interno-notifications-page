import { dfFormatDistance } from '../../@config/lib/date-fns'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Notification } from './notification'

interface NotificationProps {
  id: string
  avatarUrl: string
  content: string
  hasNew: boolean
  comment?: string
  createdAt: string
}

const notifications: NotificationProps[] = [
  {
    id: 'fc01b1b3-6b73-4963-97f7-0d1674c205bf',
    avatarUrl: '/images/avatar-mark-webber.webp',
    content:
      'Mark Webber reacted to your recent post My first tournament today!',
    hasNew: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '15f81f09-db24-49e8-99b0-6fe703d6add4',
    avatarUrl: '/images/avatar-angela-gray.webp',
    content: 'Angela Gray followed you',
    hasNew: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: '9d5b3c8d-1d0a-42d1-8fd5-564e3c3d2b74',
    avatarUrl: '/images/avatar-anna-kim.webp',
    content: 'Anna Kim commented on your picture',
    hasNew: false,
    comment: 'Nice shot! Where was this taken?',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'b3c1b0b1-7a6e-47e3-b3a5-9e9c91a9c7f4',
    avatarUrl: '/images/avatar-jacob-thompson.webp',
    content: 'Jacob Thompson joined your group Chess Club',
    hasNew: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'a2d9c1b0-2c2b-4d3f-9c4e-38e0e5a9d3c6',
    avatarUrl: '/images/avatar-rizky-hasanuddin.webp',
    content: 'Rizky Hasanuddin sent you a private message',
    hasNew: false,
    comment: 'Hey, how are you doing today?',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'f1c3b0d3-5e0b-4e9f-8c3d-2e9d5a7d2e3f',
    avatarUrl: '/images/avatar-kimberly-smith.webp',
    content: 'Kimberly Smith commented on your post',
    hasNew: false,
    comment: 'This is amazing! Great job!',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'e2d1b0f1-6c3e-4d2a-9c2b-2e1c5a6d4b2f',
    avatarUrl: '/images/avatar-nathan-peterson.webp',
    content: 'Nathan Peterson mentioned you in a comment',
    hasNew: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'c1d0a1b3-7e2f-4d8b-9c3d-2f9c3a7e4d5f',
    avatarUrl: '/images/avatar-rizky-hasanuddin.webp',
    content: 'Samantha Lee liked your photo',
    hasNew: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'd3f0b2c1-2a4d-4e3b-9d4e-3e9c1a7e5f6b',
    avatarUrl: '/images/avatar-rizky-hasanuddin.webp',
    content: 'Derek Brown shared your post',
    hasNew: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'a3b2c0d1-4e1f-4e9b-9a3c-2e3d1a9e7b8c',
    avatarUrl: '/images/avatar-rizky-hasanuddin.webp',
    content: 'Victoria Rodriguez joined your event',
    hasNew: false,
    createdAt: new Date().toISOString(),
  },
]

export function WidgetNotification() {
  return (
    <div className="w-[37.5rem] rounded-md bg-white px-4 py-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-tight text-zinc-800">
            Notificações
          </h1>
          <span className="rounded-md bg-blue-900 px-3 py-1 font-bold text-white">
            {notifications.length}
          </span>
        </div>

        <Button variant="outline" type="button">
          Marcar todas como lida
        </Button>
      </div>

      <ScrollArea className="mt-6 h-[70vh]">
        <div className="flex flex-col gap-3">
          {notifications.map((notification, i) => {
            return (
              <Notification.Root key={i} hasNew={notification.hasNew}>
                <Notification.Avatar
                  alt={notification.avatarUrl}
                  source={notification.avatarUrl}
                />

                <Notification.Content
                  text={notification.content}
                  date={dfFormatDistance({ date: notification.createdAt })}
                >
                  {notification.comment && (
                    <Notification.Comment text={notification.comment} />
                  )}
                </Notification.Content>
              </Notification.Root>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}
