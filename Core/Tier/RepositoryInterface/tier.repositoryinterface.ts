import { TierAggregateRoot } from '../AggregateRoot/tier.aggregateroot'

export interface TierRepositoryInterface {
	generateId (): Promise <number>;
	save (data: TierAggregateRoot): Promise <TierAggregateRoot>;
	// findAll (criteria: CriteriaFind[]): Promise <TierAggregateRoot[]>;
 //  findOne (id: number): Promise <TierAggregateRoot>;
}