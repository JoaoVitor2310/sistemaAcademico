import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeAddCampusValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome','endereco','telefone']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
