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
	save (data: MemberEntity): Promise <number>;
	findAll (parameters: memberListParameter): Promise <MemberEntity[]>;
	findOne (id: number): Promise <MemberEntity>;
}