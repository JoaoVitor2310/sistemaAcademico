import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeDeleteDiretorDeEnsinoValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
