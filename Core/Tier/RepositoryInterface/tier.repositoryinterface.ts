import { TierAggregateRoot } from '../AggregateRoot/tier.aggregateroot'

export interface TierRepositoryInterface {
	generateId (): Promise <number>;
	save (data: TierAggregateRoot): Promise <number>;
	findAll (): Promise <TierAggregateRoot[]>;
 //  findOne (id: number): Promise <TierAggregateRoot>;
}