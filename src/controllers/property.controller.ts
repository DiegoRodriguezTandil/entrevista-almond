import { Request, Response } from 'express'
import { PropertyService } from '../services/property.service'
import { Property, PropertyResponse } from '../models/property.model'


const propertyService = new PropertyService()

export class PropertyController {

  async createMany(req: Request, res: Response): Promise<void> {
    try {
      const properties: Property[] = req.body
      propertyService.createMany(properties)
        .then((propertyReturn: Property[]) => {
          if (propertyReturn.length > 0) {
            // properties errors
            res.status(400).json({
              message: "Error in properties validation",
              properties: propertyReturn
            })
          } else {
            res.status(200)
          }
        })
    } catch (error: any) { // Fix error type 
      res.status(500).json({
        message: "Error creating properties",
        error: error.message
      })
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      propertyService.findById(Number(req.params.id))
        .then((property: PropertyResponse) => {
          if (!property) {
            res.status(404).json({
              message: 'Property not found'
            })
          } else {
            res.status(200).json(property)
          }
        })
    } catch (error) {
      res.status(500).json({ message: 'Error fetching property', error })
    }
  }
}