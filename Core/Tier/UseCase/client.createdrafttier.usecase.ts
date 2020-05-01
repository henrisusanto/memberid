import { TierRepositoryInterface } from '../RepositoryInterface/tier.repositoryinterface'
import { TierAggregateRoot, SimpleTierJSON } from '../AggregateRoot/tier.aggregateroot'

export class ClientCreateDraftTier {

	protected repository

	constructor (repositoryConcrete: TierRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async execute (Year: number, Tiers: SimpleTierJSON []) {
    try {
      for (let Tier of Tiers) {
        let tierAggregateRoot = new TierAggregateRoot ()
        let Id = await this.repository.generateId ()
        tierAggregateRoot.createDraft (Id, Year, Tier)
        await this.repository.save (tierAggregateRoot)
      }
      return Year
    } catch (error) {
      throw new Error (error)
    }
  }

}
