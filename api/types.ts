import { z } from 'zod'
import { SignInSchema } from './validations'

export interface BaseResp<T = any> {
	code: number
	msg?: string
	data: T
}

export type SignIn = z.infer<typeof SignInSchema>

export interface SignInResp {
	token: string
}