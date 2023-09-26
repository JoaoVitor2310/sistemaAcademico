import { DeleteCampusRepositorySpy } from '@/tests/db/usecases/campus/mocks'
import { DbDeleteCampus } from '@/data/usercases/campus'
import { mockDeleteCampusParams } from '@/tests/domain/mocks'

type SutTypes = {
  sut: DbDeleteCampus
  deleteCampusRepositorySpy: DeleteCampusRepositorySpy

}
const makeSut = (): SutTypes => {
  const deleteCampusRepositorySpy = new DeleteCampusRepositorySpy()
  const sut = new DbDeleteCampus(deleteCampusRepositorySpy)
  return {
    sut,
    deleteCampusRepositorySpy
  }
}
describe('DBDeleteCampus UseCase', () => {
  test('should delete Campus data', async () => {
    const { sut, deleteCampusRepositorySpy } = makeSut()
    const deleteCampusParams = mockDeleteCampusParams()
    await sut.delete(deleteCampusParams)

    expect(deleteCampusRepositorySpy.params).toEqual({
      id: deleteCampusParams.id
    })
  })

  test('Should return true on success', async () => {
    const { sut } = makeSut()
    const isValid = await sut.delete(mockDeleteCampusParams())
    expect(isValid).toBe(false)
  })
})
