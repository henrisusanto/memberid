import { TierAggregateRoot } from '../AggregateRoot/tier.aggregateroot'

export interface TierRepositoryInterface {
	generateId (): Promise <number>;
	save (data: TierAggregateRoot): Promise <number>;
}