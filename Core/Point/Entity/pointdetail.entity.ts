
export interface PointDetailJSON {
	Id: number
	PointHeader: number
	Amount: number
	Activity: number	
}

export class PointDetailEntity {
	protected Id: number
	protected PointHeader: number
	protected Amount: number
	protected Activity: number

	public fromJSON (data: PointDetailJSON): void {
		this.Id = data.Id
		this.PointHeader = data.PointHeader
		this.Amount = data.Amount
		this.Activity = data.Activity
	}

	public toJSON (): PointDetailJSON {
		return {
			Id: this.Id,
			PointHeader: this.PointHeader,
			Amount: this.Amount,
			Activity: this.Activity
		}
	}

}