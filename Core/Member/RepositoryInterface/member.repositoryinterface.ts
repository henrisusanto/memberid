import { MemberEntity } from '../Entity/member.entity'

export interface MemberListParameter {
  limit: number,
  offset: number,
  search: string,
  searchableFields: string[],
  orderBy: string,
  order: string
}

export interface MemberRepositoryInterface {
	save (data: MemberEntity): Promise <number>;
	findAll (parameters: MemberListParameter): Promise <MemberEntity[]>;
	findOne (id: number): Promise <MemberEntity>;
}