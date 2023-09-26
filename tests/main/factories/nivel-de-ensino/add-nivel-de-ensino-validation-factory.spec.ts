import { makeAddNivelDeEnsinoValidation } from '@/main/factories/controllers/nivel-de-ensino/add-nivel-de-ensino-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('AddSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeAddNivelDeEnsinoValidation()
    const validations: Validation[] = []
    for (const field of ['nome']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
