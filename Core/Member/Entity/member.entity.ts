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

	public import (props) {
		this.id = props.id
		this.FullName = props.FullName
		this.Email = props.string
		this.PhoneNumber = props.PhoneNumber
		this.Status = props.Status
		this.RegisterDate = props.RegisterDate
		this.DateOfBirth = props.DateOfBirth
		this.Tier = props.Tier
		this.LifetimePoint = props.LifetimePoint
		this.YTDPoint = props.YTDPoint
	}

	public export () {
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