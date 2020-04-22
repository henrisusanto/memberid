import { MemberEntity } from '../Entity/member.entity'

export interface MemberRepositoryInterface {
	save (data: MemberEntity);
	mapToDomain (data): MemberEntity;
	mapToDatabase (data: MemberEntity);
}