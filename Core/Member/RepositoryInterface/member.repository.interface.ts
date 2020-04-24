import { MemberEntity } from '../Entity/member.entity'

interface memberListParameter {
  limit: number,
  offset: number,
  search: string,
  searchableFields: string[],
  orderBy: string,
  order: string
}

export interface MemberRepositoryInterface {
	generateId (): Promise <number>;
	save (data: MemberEntity): Promise <void>;
	findAll (parameters: memberListParameter): Promise <MemberEntity[]>;
}