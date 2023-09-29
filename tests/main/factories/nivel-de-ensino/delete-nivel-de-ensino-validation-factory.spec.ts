import { makeDeleteNivelDeEnsinoValidation } from '@/main/factories/controllers/nivel-de-ensino/delete-nivel-de-ensino-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('DeleteSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeDeleteNivelDeEnsinoValidation()
    const validations: Validation[] = []
    for (const field of ['id']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
