import { makeGetReitoriaValidation } from '@/main/factories'
import {
  ValidationComposite,
  RequiredFieldValidation
} from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('Get Reitoria Validation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeGetReitoriaValidation()
    const validations: Validation[] = []
    for (const field of ['id']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
