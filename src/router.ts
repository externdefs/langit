
// This file is automatically generated, do not edit.

import { mergeProps, splitProps } from "solid-js";

import {
	A as A_,
	type AnchorProps,
	Navigate as Navigate_,
	type NavigateOptions,
	type NavigateProps,
	useNavigate as useNavigate_,
	useParams as useParams_,
} from "@solidjs/router";

export type PathsWithParams = 
	| "/u/:uid"
	| "/u/:uid/profile/:actor/post/:status/reposts"
	| "/u/:uid/profile/:actor/post/:status"
	| "/u/:uid/profile/:actor/post/:status/likes"
	| "/u/:uid/profile/:actor/feed/:feed"
	| "/u/:uid/profile/:actor/list/:list"
	| "/u/:uid/profile/:actor/followers"
	| "/u/:uid/you/moderation/mute-lists"
	| "/u/:uid/profile/:actor/follows"
	| "/u/:uid/settings/explore"
	| "/u/:uid/settings/explore/add"
	| "/u/:uid/settings/profile"
	| "/u/:uid/explore"
	| "/u/:uid/profile/:actor"
	| "/u/:uid/profile/:actor/with_replies"
	| "/u/:uid/profile/:actor/list"
	| "/u/:uid/profile/:actor/likes"
	| "/u/:uid/notifications"
	| "/u/:uid/you/invites"
	| "/u/:uid/you"
	| "/u/:uid/compose"
	| "/r/*";
export type PathsWithoutParams = 
	| "/"
	| "/login";
export type Paths = PathsWithParams | PathsWithoutParams;

export interface Params {
	"/u/:uid": { "uid": string };
	"/u/:uid/profile/:actor/post/:status/reposts": { "uid": string, "actor": string, "status": string };
	"/u/:uid/profile/:actor/post/:status": { "uid": string, "actor": string, "status": string };
	"/u/:uid/profile/:actor/post/:status/likes": { "uid": string, "actor": string, "status": string };
	"/u/:uid/profile/:actor/feed/:feed": { "uid": string, "actor": string, "feed": string };
	"/u/:uid/profile/:actor/list/:list": { "uid": string, "actor": string, "list": string };
	"/u/:uid/profile/:actor/followers": { "uid": string, "actor": string };
	"/u/:uid/you/moderation/mute-lists": { "uid": string };
	"/u/:uid/profile/:actor/follows": { "uid": string, "actor": string };
	"/u/:uid/settings/explore": { "uid": string };
	"/u/:uid/settings/explore/add": { "uid": string };
	"/u/:uid/settings/profile": { "uid": string };
	"/u/:uid/explore": { "uid": string };
	"/u/:uid/profile/:actor": { "uid": string, "actor": string };
	"/u/:uid/profile/:actor/with_replies": { "uid": string, "actor": string };
	"/u/:uid/profile/:actor/list": { "uid": string, "actor": string };
	"/u/:uid/profile/:actor/likes": { "uid": string, "actor": string };
	"/u/:uid/notifications": { "uid": string };
	"/u/:uid/you/invites": { "uid": string };
	"/u/:uid/you": { "uid": string };
	"/u/:uid/compose": { "uid": string };
	"/r/*": { "*": string };
}

type NavigateWithParamOptions<P> = P extends number
	? []
	: P extends PathsWithParams
		? [Partial<NavigateOptions> & { params: Params[P] }]
		: [Partial<NavigateOptions> & { params?: never }] | [];

export type AnchorWithParamProps<P> = AnchorProps &
	(P extends PathsWithParams ? { href: P; params: Params[P] } : { href: P; params?: never });
export type NavigateWithParamProps<P> = NavigateProps &
	(P extends PathsWithParams ? { href: P; params: Params[P] } : { href: P; params?: never });

export const useParams: <P extends PathsWithParams>(path: P) => Params[P] = useParams_ as any;
export const useNavigate = (): (<P extends Paths | number>(
	href: P,
	...options: NavigateWithParamOptions<P>
) => void) => {
	const navigate = useNavigate_();
	return ((path: any, options: any) => {
		if (typeof path === "number") {
			return navigate(path);
		}

		const params = options?.params;
		return navigate(params ? generatePath(path, params) : path, options);
	}) as any;
};

export const A = <P extends Paths>(props: AnchorWithParamProps<P>) => {
	const [int, ext] = splitProps(props, ["href", "params"]);
	return A_(mergeProps(ext, { get href() { return int.params ? generatePath(int.href, int.params) : int.href; } }));
};
export const Navigate = <P extends Paths>(props: NavigateWithParamProps<P>) => {
	const [int, ext] = splitProps(props, ["href", "params"]);
	return Navigate_(mergeProps(ext, { get href() { return int.params ? generatePath(int.href, int.params) : int.href; } }));
};

export { A as NavLink };

const RE_PARAM = /\/:(\w+)(\??)/g;
const generatePath = (path: string, params: Record<string, string>) =>
	path.replace(RE_PARAM, (_, segment) => (params[segment] ? `/${params[segment]}` : ""));
