import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeGetDirecaoDeEnsinoValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
