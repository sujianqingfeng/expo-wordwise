import { z } from 'zod'
import { SignInSchema } from './validations'

export interface BaseResp<T = any> {
	code: number
	msg?: string
	data: T
}

export interface PageResp<T> {
	data: T[]
	hasNextPage: false
	hasPrevPage: false
	total: 1
	totalPage: 1
}

export type SignIn = z.infer<typeof SignInSchema>

export interface SignInResp {
	token: string
}

export interface ReadLaterResp {
	id: string
	title: string
	desc: string
	content: string
	publishedTime: string
	source: string
	author: string
}
