import { makeDeleteDiretorDeEnsinoValidation } from '@/main/factories/controllers/diretor-de-ensino/delete-diretor-de-ensino-validation-factory'
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/interfacestypes'

jest.mock('@/validation/validators/validation-composite')

describe('DeleteSurveyValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeDeleteDiretorDeEnsinoValidation()
    const validations: Validation[] = []
    for (const field of ['id']) {
      validations.push(new RequiredFieldValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
