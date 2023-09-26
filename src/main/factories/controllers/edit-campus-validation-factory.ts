import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeEditCampusValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
