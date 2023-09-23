import { Validation } from '@/presentation/interfacestypes'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeAddDiretorValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['servidor','campus','dataInicio','dataFim']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
