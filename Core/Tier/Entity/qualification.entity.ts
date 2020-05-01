export interface QualificationJSON {
	Id: number
	Tier: number
	MemberField: string
	ThresholdValue: number
}

export interface SimpleQualificationJSON {
	MemberField: string
	ThresholdValue: number
}

export class QualificationEntity {
	protected Id: number
	protected Tier: number
	protected MemberField: string
	protected ThresholdValue: number

	public createDraft (Tier: number, data: SimpleQualificationJSON): void {
		this.Tier = Tier
		this.MemberField = data.MemberField
		this.ThresholdValue = data.ThresholdValue
	}

	public toJSON (): QualificationJSON {
		return {
			Id: this.Id,
			Tier: this.Tier,
			MemberField: this.MemberField,
			ThresholdValue: this.ThresholdValue
		}
	}

	public fromJSON (data: QualificationJSON) {
		this.Id = data.Id
		this.Tier = data.Tier
		this.MemberField = data.MemberField
		this.ThresholdValue = data.ThresholdValue
	}

}