import type { NotificationError } from '../stores/notifications'

export interface NotifyOptions {
  title: string
  description?: string
  color?: 'success' | 'error' | 'warning' | 'info' | 'neutral'
  icon?: string
  error?: NotificationError
}

// Map notification colors to appropriate icons
const defaultIcons: Record<string, string> = {
  success: 'i-lucide-check-circle',
  error: 'i-lucide-alert-circle',
  warning: 'i-lucide-alert-triangle',
  info: 'i-lucide-info',
  neutral: 'i-lucide-bell'
}

export function useNotify() {
  const toast = useToast()
  const notificationsStore = useNotificationsStore()

  function notify(options: NotifyOptions) {
    const color = options.color ?? 'neutral'
    const icon = options.icon ?? defaultIcons[color]

    // Show toast
    toast.add({
      title: options.title,
      description: options.description,
      color,
      icon
    })

    // Add to notification history
    notificationsStore.add({
      title: options.title,
      description: options.description,
      color,
      icon,
      error: options.error
    })
  }

  function success(title: string, description?: string) {
    notify({ title, description, color: 'success' })
  }

  function error(title: string, description?: string, errorDetails?: NotificationError) {
    notify({ title, description, color: 'error', error: errorDetails })
  }

  function warning(title: string, description?: string) {
    notify({ title, description, color: 'warning' })
  }

  function info(title: string, description?: string) {
    notify({ title, description, color: 'info' })
  }

  return {
    notify,
    success,
    error,
    warning,
    info
  }
}
