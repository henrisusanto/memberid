import { MemberRepositoryInterface } from '../RepositoryInterface/member.repositoryinterface'
import { MemberEntity } from '../Entity/member.entity'

export class ClientUpdateMemberProfile {

	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async  execute (id: number, FullName: string, Email: string, PhoneNumber: string, RegisterDate: Date, DateOfBirth: Date) {
    try {
      const memberEntity = new MemberEntity()
      memberEntity.updateProfile ({id, FullName, Email, PhoneNumber, RegisterDate, DateOfBirth})
      const saved = await this.repository.save(memberEntity)
      return saved.exportToPersistence()
    } catch (error) {
      throw new Error (error)
    }
  }

}
