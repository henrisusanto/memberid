import { TierRepositoryInterface } from '../RepositoryInterface/tier.repositoryinterface'
import { TierAggregateRoot, SimpleTier } from '../AggregateRoot/tier.aggregateroot'

export class ClientCreateDraftTier {

	protected repository

	constructor (repositoryConcrete: TierRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async execute (year: number, tiers: SimpleTier[]) {
    try {
      for (let tier of tiers) {
        let tierAggregateRoot = new TierAggregateRoot ()
        tierAggregateRoot.createDraft (
          await this.repository.generateId (),
          tier.Name,
          year,
          tier.Qualifications
        )
        this.repository.save(tierAggregateRoot)
      }
      // return saved.exportToPersistence()
    } catch (error) {
      throw new Error (error)
    }
  }

}
