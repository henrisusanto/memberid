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
	save (data: MemberEntity): Promise <MemberEntity>;
	findAll (parameters: memberListParameter): Promise <MemberEntity[]>;
	findOne (id: number): Promise <MemberEntity>;
}