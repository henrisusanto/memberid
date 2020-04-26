import { MemberRepositoryInterface } from '../RepositoryInterface/member.repository.interface'
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
      return await this.repository.save(memberEntity)
    } catch (error) {
      throw new Error (error)
    }
  }

}
