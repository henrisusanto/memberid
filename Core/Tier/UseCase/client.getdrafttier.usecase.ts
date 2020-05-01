import { TierRepositoryInterface } from '../RepositoryInterface/tier.repositoryinterface'
import { TierJSON } from '../AggregateRoot/tier.aggregateroot'

export class ClientGetDraftTier {

	protected repository

	constructor (repositoryConcrete: TierRepositoryInterface) {
		this.repository = repositoryConcrete
	}

  public async execute (Year: number) {
    try {
      let tiersJSONs: TierJSON[] = []
      for (let tierAggregateRoot of await this.repository.findByYear (Year)) {
        tiersJSONs.push (tierAggregateRoot.toSimpleJSON ())
      }
      return tiersJSONs
    } catch (error) {
      throw new Error (error)
    }
  }

}
