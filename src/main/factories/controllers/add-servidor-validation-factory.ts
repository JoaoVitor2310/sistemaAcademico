import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation } from '@/validation/validators/required-field-validation'
import { ValidationComposite } from '@/validation/validators/validation-composite'

export const makeAddServidorValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome', 'matricula']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
