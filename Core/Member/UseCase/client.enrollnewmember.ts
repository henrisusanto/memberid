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
      memberEntity.setFullName (FullName)
      memberEntity.setEmail (Email)
      memberEntity.setPhoneNumber (PhoneNumber)
      memberEntity.setRegisterDate (RegisterDate)
      memberEntity.setDateOfBirth (DateOfBirth)
      this.repository.save(memberEntity)
      return true
    } catch (error) {
      return error
    }
  }

}
