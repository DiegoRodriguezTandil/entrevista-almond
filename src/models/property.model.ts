

export interface Property {
  id?: number
  street_name: string
  street_number: number
  street_type: string
  staircase?: string
  floor_number: string
  door?: string
  district: string
  postal_code: string
  cadastral_reference: string
  m2_net: number
  m2_gross: number
  owner_email: string
}

export type PropertyResponse = Property | null