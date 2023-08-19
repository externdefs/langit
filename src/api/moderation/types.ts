import type { DID, RefOf } from '@intrnl/bluesky-client/atp-schema';

import type { KeywordPreference } from './enums.ts';

export type Label = RefOf<'com.atproto.label.defs#label'>;

export interface LabelDefinition {
	/** The group ID that the label falls under */
	g: string;
	/** Enforce a specific preference value, means that the user can't configure what to do with this label */
	e?: number;
	/** Additional flags for this label */
	f: number;
	/** Actions to take for this label */
	a: number;
}

export type LabelDefinitionMap = Record<string, LabelDefinition>;

export interface ModerationLabelOpts {
	groups: { [group: string]: number | undefined };
	labels: { [label: string]: number | undefined };
}

export type ModerationFilterKeywordOpts = [keyword: string, whole: boolean];

export interface ModerationFiltersOpts {
	// Only these 3 properties are ever used during actual filtering
	name: string;
	pref: KeywordPreference;
	match: string;

	// These are used in the preferences UI
	id: string;
	matchers: ModerationFilterKeywordOpts[];
}

export interface ModerationOpts {
	_filtersCache?: [raw: string, match: RegExp][];

	userDid: string;
	globals: ModerationLabelOpts;
	users: { [user: DID]: ModerationLabelOpts | undefined };
	labelers: { [labeler: DID]: ModerationLabelOpts | undefined };
	filters: ModerationFiltersOpts[];
}
