import { MemberEntity } from '../Entity/member.entity'

export interface MemberRepositoryInterface {
	create (member: MemberEntity): void;
	save (data: MemberEntity);
	mapToDomain (data): MemberEntity;
	mapToDatabase (data: MemberEntity);
}