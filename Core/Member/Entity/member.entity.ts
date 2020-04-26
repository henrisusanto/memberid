
interface memberProfile {
	id: number
	FullName: string
	Email: string
	PhoneNumber: string
	RegisterDate: Date
	DateOfBirth: Date
}

interface persistenceData {
	id: number
	FullName: string
	Email: string
	PhoneNumber: string
	Status: boolean
	RegisterDate: Date
	DateOfBirth: Date
	Tier: number
	LifetimePoint: number
	YTDPoint: number
}

export class MemberEntity {
	protected id: number
	protected FullName: string
	protected Email: string
	protected PhoneNumber: string
	protected Status: boolean
	protected RegisterDate: Date
	protected DateOfBirth: Date
	protected Tier: number
	protected LifetimePoint: number
	protected YTDPoint: number

	public enroll (data: memberProfile): void {
		this.id = data.id
		this.FullName = data.FullName
		this.Email = data.Email
		this.PhoneNumber = data.PhoneNumber
		this.RegisterDate = data.RegisterDate
		this.DateOfBirth = data.DateOfBirth

		this.Status = true
		this.Tier = 0
		this.LifetimePoint = 0
		this.YTDPoint = 0
	}

	public updateProfile (data: memberProfile): void {
		this.id = data.id
		this.FullName = data.FullName
		this.Email = data.Email
		this.PhoneNumber = data.PhoneNumber
		this.RegisterDate = data.RegisterDate
		this.DateOfBirth = data.DateOfBirth
	}

	public disable () {
		this.Status = false
	}

	public enable () {
		this.Status = true
	}

	public importFromPersistence (data: persistenceData): void {
		this.id = data.id
		this.FullName = data.FullName
		this.Email = data.Email
		this.PhoneNumber = data.PhoneNumber
		this.Status = data.Status
		this.RegisterDate = data.RegisterDate
		this.DateOfBirth = data.DateOfBirth
		this.Tier = data.Tier
		this.LifetimePoint = data.LifetimePoint
		this.YTDPoint = data.YTDPoint
	}

	public exportToPersistence () {
		return {
			id: this.id,
			FullName: this.FullName,
			Email: this.Email,
			PhoneNumber: this.PhoneNumber,
			Status: this.Status,
			RegisterDate: this.RegisterDate,
			DateOfBirth: this.DateOfBirth,
			Tier: this.Tier,
			LifetimePoint: this.LifetimePoint,
			YTDPoint: this.YTDPoint
		}
	}

}