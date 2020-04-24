import { MemberRepositoryInterface } from '../RepositoryInterface/member.repository.interface'

export class ClientGetMemberList {

  protected repository

  constructor (repositoryConcrete: MemberRepositoryInterface) {
    this.repository = repositoryConcrete
  }

  public async  execute (limit: number, page: number, search: string, sort: string, sortType: string) {
    limit = limit || 5
    page = page || 1
    const offset = (page - 1) * limit
    search = search || ''
    const searchableFields: string[] = ['FullName', 'Email', 'PhoneNumber']
    sort = sort || 'id'
    sortType = sortType || 'asc'

    try {
      const results = await this.repository.findAll(limit, offset, search, searchableFields, sort, sortType)
      return results.map (result => {
        return result.export()
      })
    } catch (error) {
      throw new Error (error)
    }
  }

}
