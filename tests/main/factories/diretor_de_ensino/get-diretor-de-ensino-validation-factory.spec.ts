import { makeGetDiretorDeEnsinoValidation } from '@/main/factories/controllers/diretor-de-ensino/get-diretor-de-ensino-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('GetSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeGetDiretorDeEnsinoValidation()
    const validations: Validation[] = []
    for (const field of ['nome']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
