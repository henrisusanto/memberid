import { MemberRepositoryInterface } from '../RepositoryInterface/member.repositoryinterface'

export class ClientGetMemberList {
	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async  execute (
    recordPerPage: number,
    currentPage: number,
    searchKeyword: string,
    sortBy: string,
    order: string
  ) {

    recordPerPage = recordPerPage || 5
    currentPage = currentPage || 1
    searchKeyword = searchKeyword || ''
    sortBy = sortBy || 'id'
    order = order && 'desc' === order.toLowerCase () ? 'DESC' : 'ASC'

    try {
      const listOfMemberEntity = 
      await this.repository.findAll({
        limit: recordPerPage,
        offset: (currentPage - 1) * recordPerPage,
        search: searchKeyword,
        searchableFields: ['FullName', 'Email', 'PhoneNumber'],
        orderBy: sortBy,
        order
      })

      let listOfJSONObj = listOfMemberEntity.map(memberEntity => {
        return memberEntity.exportToPersistence()
      })

      return listOfJSONObj
    } catch (error) {
      throw new Error (error)
    }
  }

}
