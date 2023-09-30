import { makeGetDirecaoDeEnsinoValidation } from '@/main/factories/controllers/direcao-de-ensino/get-direcao-de-ensino-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('GetSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeGetDirecaoDeEnsinoValidation()
    const validations: Validation[] = []
    for (const field of ['nome']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
