export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      party: {
        Row: {
          created_by: string
          created_time: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_by: string | null
          updated_time: string | null
        }
        Insert: {
          created_by: string
          created_time: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_by?: string | null
          updated_time?: string | null
        }
        Update: {
          created_by?: string
          created_time?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_by?: string | null
          updated_time?: string | null
        }
      }
      profile: {
        Row: {
          email: string | null
          id: string
          image: string | null
          name: string | null
        }
        Insert: {
          email?: string | null
          id: string
          image?: string | null
          name?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

