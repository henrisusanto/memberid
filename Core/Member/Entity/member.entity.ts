export class MemberEntity {
	protected id: string
	protected FullName: string
	protected Email: string
	protected PhoneNumber: string
	protected Status: boolean
	protected RegisterDate: Date
	protected DateOfBirth: Date
	protected Tier: string
	protected LifetimePoint: number
	protected YTDPoint: number

	public setId (id: string) {
		this.id = id
	}

	public setFullName (FullName: string) {
		this.FullName = FullName
	}

	public setEmail (Email: string)  {
		this.Email = Email
	}

	public setPhoneNumber (PhoneNumber: string)  {
		this.PhoneNumber = PhoneNumber
	}

	public setRegisterDate (RegisterDate: Date)  {
		this.RegisterDate = RegisterDate
	}

	public setDateOfBirth (DateOfBirth: Date)  {
		this.DateOfBirth = DateOfBirth
	}

	public getId () {
		return this.id
	}

	public getFullName () {
		return this.FullName
	}

	public getEmail () {
		return this.Email
	}

	public getPhoneNumber () {
		return this.PhoneNumber
	}

	public getRegisterDate () {
		return this.RegisterDate
	}

	public getDateOfBirth () {
		return this.DateOfBirth
	}

}