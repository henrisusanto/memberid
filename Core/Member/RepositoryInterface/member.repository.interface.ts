import { MemberEntity } from '../Entity/member.entity'

export interface MemberRepositoryInterface {
	generateId (): number;
	save (data: MemberEntity);
	findAll (limit: number, offset: number, search: string, searchableFields: string[], sort: string, sortType: string): Promise <MemberEntity[]>;
	persistenceToDomain (data): MemberEntity;
	domainJSONtoPersistence (data: MemberEntity);
}