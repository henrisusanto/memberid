import { MemberEntity } from '../Entity/member.entity'

export interface MemberRepositoryInterface {
	generateId (): Promise <number>;
	save (data: MemberEntity): Promise <void>;
}