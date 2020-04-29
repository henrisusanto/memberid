import { MemberRepositoryInterface } from '../RepositoryInterface/member.repositoryinterface'
import { MemberEntity } from '../Entity/member.entity'

export class ClientEnrollNewMember {

	protected repository

	constructor (repositoryConcrete: MemberRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async  execute (FullName: string, Email: string, PhoneNumber: string, RegisterDate: Date, DateOfBirth: Date) {
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
      const saved = await this.repository.save(memberEntity)
      return saved.exportToPersistence()
    } catch (error) {
      throw new Error (error)
    }
  }

}
