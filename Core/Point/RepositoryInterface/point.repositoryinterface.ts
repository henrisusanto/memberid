import { PointHeaderAggregateRoot } from '../AggregateRoot/pointheader.aggregateroot'

export interface MemberRepositoryInterface {
	save (data: PointHeaderAggregateRoot): Promise <number>;
}