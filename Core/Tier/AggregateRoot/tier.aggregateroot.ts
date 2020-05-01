import { QualificationEntity, QualificationJSON, SimpleQualificationJSON } from '../Entity/qualification.entity'

export interface TierJSON {
	 Id: number
	 Name: string
	 Year: number
	 Qualifications: QualificationJSON []
}

export interface SimpleTierJSON {
	Name: string,
	Qualifications: SimpleQualificationJSON[]
}

export class TierAggregateRoot {
	protected Id: number
	protected Name: string
	protected Year: number
	protected Qualifications: QualificationEntity[]

	public createDraft (Id: number, Year: number, data: SimpleTierJSON) {
		this.Id = Id
		this.Year = Year
		this.Name = data.Name
		this.Qualifications = []

		for (let daqu of data.Qualifications) {
			let qualification = new QualificationEntity ()
			qualification.createDraft(this.Id, daqu)
			this.Qualifications.push(qualification)
		}
	}

	public fromJSON (data: TierJSON): void {

	}

	public toJSON (): TierJSON {
		let tierJSON: TierJSON = {
			Id: this.Id,
			Name: this.Name,
			Year: this.Year,
			Qualifications: []
		}
		for (let qualification of this.Qualifications) {
			tierJSON.Qualifications.push (qualification.toJSON ())
		}
		return tierJSON
	}

}