import { PointDetailEntity, PointDetailJSON } from '../Entity/pointdetail.entity'

export interface PointHeaderJSON {
	Id: number
	Member: number
	Status: string
	Amount: number
	Remarks: string
	ExpiredDate: Date
	Details: PointDetailJSON[]
}

export class PointHeaderAggregateRoot {
	protected Id: number
	protected Member: number
	protected Status: string // Actived, Cancelled, Expired
	protected Amount: number
	protected Remarks: string
	protected ExpiredDate: Date
	protected Details: PointDetailEntity[]

	public fromJSON (data: PointHeaderJSON): void {
		this.Id = data.Id
		this.Member = data.Member
		this.Status = data.Status
		this.Amount = data.Amount
		this.Remarks= data.Remarks
		this.ExpiredDate = data.ExpiredDate
		this.Details = []
		for (let detail of data.Details) {
			let pde = new PointDetailEntity ()
			pde.fromJSON (detail)
			this.Details.push (pde)
		}
	}

	public toJSON (): PointHeaderJSON {
		let pdJSON: PointDetailJSON [] = []
		for (let detail of this.Details) {
			pdJSON.push (detail.toJSON ())
		}
		return {
			Id: this.Id,
			Member: this.Member,
			Status: this.Status,
			Amount: this.Amount,
			Remarks: this.Remarks,
			ExpiredDate: this.ExpiredDate,
			Details: pdJSON
		}
	}

}