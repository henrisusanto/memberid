import { MemberRepositoryInterface } from '../RepositoryInterface/member.repository.interface'

export class ClientEnableMember {

	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async execute (id: number) {
    try {
      var memberEntity = await this.repository.findOne(id)
      memberEntity.enable()
      const saved = await this.repository.save(memberEntity)
      return saved.exportToPersistence()
    } catch (error) {
      throw new Error (error)
    }
  }

}
