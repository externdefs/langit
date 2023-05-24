import { Show, createMemo } from 'solid-js';

import { createInfiniteQuery } from '@tanstack/solid-query';

import { type DID } from '~/api/utils.ts';

import { createProfileFollowersQuery, getProfileFollowersKey } from '~/api/queries/get-profile-followers.ts';

import { useParams } from '~/router.ts';

import ProfileList from '~/components/ProfileList';

const PAGE_LIMIT = 30;

const AuthenticatedProfileFollowersPage = () => {
	const params = useParams('/u/:uid/profile/:actor/followers');

	const uid = () => params.uid as DID;

	const followersQuery = createInfiniteQuery({
		queryKey: () => getProfileFollowersKey(uid(), params.actor),
		queryFn: createProfileFollowersQuery(PAGE_LIMIT),
		getNextPageParam: (last) => last.cursor,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	});

	const subject = createMemo(() => {
		return followersQuery.data?.pages[0].subject;
	});

	return (
		<div class='flex flex-col'>
			<div class='bg-background flex items-center h-13 px-4 border-b border-divider sticky top-0 z-10'>
				<div class='flex flex-col gap-0.5'>
					<p class='text-base leading-5 font-bold'>Followers</p>

					<Show when={subject()}>
						{(subject) => <p class='text-xs text-muted-fg'>@{subject().handle.value}</p>}
					</Show>
				</div>
			</div>

			<ProfileList
				uid={uid()}
				listQuery={followersQuery}
				onLoadMore={() => followersQuery.fetchNextPage()}
			/>
		</div>
	);
};

export default AuthenticatedProfileFollowersPage;
