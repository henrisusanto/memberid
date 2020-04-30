import { QualificationEntity, SimpleQualification, FullQualification } from '../Entity/qualification.entity'

export interface SimpleTier {
	Name: string,
	Qualifications: SimpleQualification[]
}

export class TierAggregateRoot {
	protected Id: number
	protected Name: string
	protected Year: number
	protected Qualifications: QualificationEntity[]

	public createDraft (Id: number, Name: string, Year: number, simpleQualifications: SimpleQualification[]) {
		this.Id = Id
		this.Name = Name
		this.Year = Year
		this.Qualifications = []
		for (let sq of simpleQualifications) {
			let q = new QualificationEntity ()
			q.create (this.Id, sq.MemberField, sq.ThresholdValue)
			this.Qualifications.push(q)
		}
	}

	public getQualifications () {
		return this.Qualifications
	}

	public pushQualification (qualification: QualificationEntity): void {
		this.Qualifications.push(qualification)
	}

	public importFromPersistence (Id: number, Name: string, Year: number) {
		this.Id = Id
		this.Name = Name
		this.Year = Year
		this.Qualifications = []
	}

	public toPersistence () {
		return {
			Id: this.Id,
			Name: this.Name,
			Year: this.Year
		}
	}

	public toAPI () {
		let Qualifications: FullQualification [] = []
		for (let q of this.Qualifications) {
			Qualifications.push (q.toPersistence ())
		}
		return {
			Id: this.Id,
			Name: this.Name,
			Year: this.Year,
			Qualifications
		}
	}

}