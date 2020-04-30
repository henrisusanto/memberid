export interface SimpleQualification {
	MemberField: string
	ThresholdValue: number
}

export interface FullQualification {
	Id: number
	Tier: number
	MemberField: string
	ThresholdValue: number
}

export class QualificationEntity {
	protected Id: number
	protected Tier: number
	protected MemberField: string
	protected ThresholdValue: number

	public create (Tier: number, MemberField: string, ThresholdValue: number): void {
		this.Tier = Tier
		this.MemberField = MemberField
		this.ThresholdValue = ThresholdValue
	}

	public toPersistence (): FullQualification {
		return {
			Id: this.Id,
			Tier: this.Tier,
			MemberField: this.MemberField,
			ThresholdValue: this.ThresholdValue
		}
	}

	public importFromPersistence (Id: number, Tier: number, MemberField: string, ThresholdValue: number): void {
		this.Id = Id
		this.Tier = Tier
		this.MemberField = MemberField
		this.ThresholdValue = ThresholdValue
	}

}