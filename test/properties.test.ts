import { PropertyService } from '../src/services/property.service'



describe('Test Service Properties', () => {

  it('Test true m2 validation', () => {
    const propertyService = new PropertyService()
    const responseValidation = propertyService.validationM2({
      "street_type": "Avenue",
      "street_name": "Ocean Drive",
      "street_number": 12,
      "staircase": "A",
      "floor_number": "3",
      "door": "2B",
      "district": "Beverly Hills",
      "postal_code": "90265",
      "cadastral_reference": "3265801VK4736E0003EL",
      "m2_net": 150.0,
      "m2_gross": 180.0,
      "owner_email": "owner1@example.com"
    })
    expect(responseValidation).toBeTruthy()
  })

  it('Test false m2_net negative', () => {
    const propertyService = new PropertyService()
    const responseValidation = propertyService.validationM2({
      "street_type": "Avenue",
      "street_name": "Ocean Drive",
      "street_number": 12,
      "staircase": "A",
      "floor_number": "3",
      "door": "2B",
      "district": "Beverly Hills",
      "postal_code": "90265",
      "cadastral_reference": "3265801VK4736E0003EL",
      "m2_net": -1,
      "m2_gross": 180.0,
      "owner_email": "owner1@example.com"
    })
    expect(responseValidation).toBeFalsy()
  })

  it('Test false m2_net negative', () => {
    const propertyService = new PropertyService()
    const responseValidation = propertyService.validationM2({
      "street_type": "Avenue",
      "street_name": "Ocean Drive",
      "street_number": 12,
      "staircase": "A",
      "floor_number": "3",
      "door": "2B",
      "district": "Beverly Hills",
      "postal_code": "90265",
      "cadastral_reference": "3265801VK4736E0003EL",
      "m2_net": 0,
      "m2_gross": 180.0,
      "owner_email": "owner1@example.com"
    })
    expect(responseValidation).toBeFalsy()
  })

  it('Test false m2_net greater than m2_gross', () => {
    const propertyService = new PropertyService()
    const responseValidation = propertyService.validationM2({
      "street_type": "Avenue",
      "street_name": "Ocean Drive",
      "street_number": 12,
      "staircase": "A",
      "floor_number": "3",
      "door": "2B",
      "district": "Beverly Hills",
      "postal_code": "90265",
      "cadastral_reference": "3265801VK4736E0003EL",
      "m2_net": 200,
      "m2_gross": 180.0,
      "owner_email": "owner1@example.com"
    })
    expect(responseValidation).toBeFalsy()
  })

})