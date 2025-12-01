export const queryKeys = {
  events: {
    all: ['events'] as const,
    lists: () => [...queryKeys.events.all, 'list'] as const,
    list: (filters?: string) => [...queryKeys.events.lists(), { filters }] as const,
    details: () => [...queryKeys.events.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.events.details(), id] as const,
  },
  resources: {
    all: ['resources'] as const,
    lists: () => [...queryKeys.resources.all, 'list'] as const,
    list: (category?: string) => [...queryKeys.resources.lists(), { category }] as const,
    detail: (id: string) => [...queryKeys.resources.all, 'detail', id] as const,
  },
  blog: {
    all: ['blog'] as const,
    lists: () => [...queryKeys.blog.all, 'list'] as const,
    list: (category?: string) => [...queryKeys.blog.lists(), { category }] as const,
    detail: (slug: string) => [...queryKeys.blog.all, 'detail', slug] as const,
  },
  users: {
    all: ['users'] as const,
    profile: (userId: string) => [...queryKeys.users.all, 'profile', userId] as const,
    events: (userId: string) => [...queryKeys.users.all, 'events', userId] as const,
    savedResources: (userId: string) => [...queryKeys.users.all, 'saved-resources', userId] as const,
  },
  volunteers: {
    all: ['volunteers'] as const,
    profile: (userId: string) => [...queryKeys.volunteers.all, 'profile', userId] as const,
    hours: (userId: string) => [...queryKeys.volunteers.all, 'hours', userId] as const,
  },
  donations: {
    all: ['donations'] as const,
    history: (userId?: string) => [...queryKeys.donations.all, 'history', userId] as const,
  },
} as const;

