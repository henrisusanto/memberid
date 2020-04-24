
interface enrollmentData {
	id: string
	FullName: string
	Email: string
	PhoneNumber: string
	RegisterDate: Date
	DateOfBirth: Date
}

interface persistenceData {
	id: string
	FullName: string
	Email: string
	PhoneNumber: string
	Status: boolean
	RegisterDate: Date
	DateOfBirth: Date
	Tier: string
	LifetimePoint: number
	YTDPoint: number
}

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

	public enroll (data: enrollmentData): void {
		this.id = data.id
		this.FullName = data.FullName
		this.Email = data.Email
		this.PhoneNumber = data.PhoneNumber
		this.RegisterDate = data.RegisterDate
		this.DateOfBirth = data.DateOfBirth
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