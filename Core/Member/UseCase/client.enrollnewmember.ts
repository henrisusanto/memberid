import { MemberRepositoryInterface } from '../RepositoryInterface/member.repository.interface'
import { MemberEntity } from '../Entity/member.entity'

export class ClientEnrollNewMember {

	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async  execute (FullName, Email, PhoneNumber, RegisterDate, DateOfBirth) {
    try {
      const memberEntity = new MemberEntity()
      memberEntity.enroll({
        id: await this.repository.generateId (),
        FullName: FullName,
        Email: Email,
        PhoneNumber: PhoneNumber,
        RegisterDate: RegisterDate,
        DateOfBirth: DateOfBirth
      })
      return await this.repository.save(memberEntity)
    } catch (error) {
      throw new Error (error)
    }
  }

}
