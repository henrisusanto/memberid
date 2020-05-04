import { PointRepositoryInterface } from '../RepositoryInterface/point.repositoryinterface'
import { MemberRepositoryInterface } from '../../../Core/Member/RepositoryInterface/member.repositoryinterface'
import { PointHeaderAggregateRoot } from '../AggregateRoot/pointheader.aggregateroot'
import { MemberEntity } from '../../../Core/Member/Entity/member.entity'

export class ClientAddMemberPoint {

	protected repository

	constructor (repositoryConcrete: PointRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async execute (Member: number, Amount: number, Remarks: string) {
    try {
      let Point = new PointHeaderAggregateRoot ()
      Point.ClientAddMemberPoint (
        this.repository.generateId (),
        Member,
        Amount,
        Remarks
      )
      let member = new 
      return this.repository.save (Point)
    } catch (error) {
      throw new Error (error)
    }
  }

}
