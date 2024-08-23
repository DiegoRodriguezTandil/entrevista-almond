import { Response } from "express"
import pool from "../config/db.config"
import { Property } from '../models/property.model'

export class PropertyService {

  async findById(id: number): Promise<Property | null> {
    return pool.query('SELECT * FROM properties WHERE id = $1', [id])
      .then((result: any) => {
        return result.rows[0] || null
      })
  }

  validationM2(property: Property): Boolean {
    return (property.m2_net > 0) && (property.m2_net <= property.m2_gross)
  }

  validationEmail(property: Property): Boolean {
    return true
  }

  async createMany(properties: Property[]): Promise<Property[]> {

    const errorProperties: Property[] = []

    properties.forEach((property: Property) => {
      if (this.validationM2(property)) {
        const { street_type, street_name, street_number, staircase, floor_number, door, district, postal_code, cadastral_reference, m2_net, m2_gross, owner_email } = property
        pool.query(`
          INSERT INTO properties(street_type, street_name, street_number, staircase, floor_number, door, district, postal_code, cadastral_reference, m2_net, m2_gross, owner_email)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
          `,
          [street_type, street_name, street_number, staircase, floor_number, door, district, postal_code, cadastral_reference, m2_net, m2_gross, owner_email]
        )
      } else {
        errorProperties.push(property)
      }
    })

    return errorProperties
  }

}