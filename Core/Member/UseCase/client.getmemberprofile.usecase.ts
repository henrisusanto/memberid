import { MemberRepositoryInterface } from '../RepositoryInterface/member.repository.interface'

export class ClientGetMemberProfile {
	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async  execute (id: number) {
    try {
      const found = await this.repository.findOne(id)
      return found.exportToPersistence()
    } catch (error) {
      throw new Error (error)
    }
  }

}
