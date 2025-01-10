export interface User {
    id: number
    name: string
    avatar?: string
    role: userRole
}

export type userRole = "admin" | "user"