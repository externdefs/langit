import { createQuery } from '@tanstack/solid-query';
import { Show, createSignal } from 'solid-js';

import { DEFAULT_DATA_SERVERS } from '~/api/defaults';
import { multiagent } from '~/api/global';
import { useNavigate } from '~/router';
import { XRPC } from '~/utils/xrpc';

import button from '~/styles/primitives/button';
import input from '~/styles/primitives/input';

const AuthLoginPage = () => {
	const navigate = useNavigate();

	const [service, setService] = createSignal(DEFAULT_DATA_SERVERS[0]);
	const [dispatching, setDispatching] = createSignal(false);

	const describeQuery = createQuery(() => ['describeServer', service().url], async (query) => {
		const rpc = new XRPC(service().url);

		const res = await rpc.get({
			method: 'com.atproto.server.describeServer',
			signal: query.signal,
		});

		return res.data;
	});

	return (
		<div class='max-w-xl mx-auto px-4 py-8'>
			<h1 class='mb-8 text-lg font-bold'>Login</h1>

			<form
				onSubmit={(ev) => {
					const form = new FormData(ev.currentTarget);

					const url = service().url;
					const identifier = form.get('user') as string;
					const password = form.get('pwd') as string;

					ev.preventDefault();
					setDispatching(true);

					multiagent.login({ service: url, identifier, password }).then(
						(uid) => {
							navigate(`/u/:uid`, { params: { uid } });
						},
						(err) => {
							console.error(err);
							setDispatching(false);
						},
					);
				}}
				class='flex flex-col gap-4'
			>
				<div class='flex gap-1 items-center text-sm'>
					<span class='font-medium text-muted-fg'>Connecting to</span>
					<span class='font-medium text-primary grow'>{service().name}</span>

					<button disabled type='button' class={button({ color: 'outline' })}>Change</button>
				</div>

				<div class='flex flex-col gap-2'>
					<label for='user' class='block text-sm font-medium leading-6 text-primary'>
						Identifier
					</label>
					<input
						type='text'
						name='user'
						id='user'
						required
						autocomplete='username'
						class={input()}
					/>
				</div>

				<div class='flex flex-col gap-2'>
					<label for='pwd' class='block text-sm font-medium leading-6 text-primary'>
						Password
					</label>
					<input
						type='password'
						name='pwd'
						id='pwd'
						required
						autocomplete='password'
						class={input()}
					/>
				</div>

				<Show when={describeQuery.data} keyed>
					{(data) => (
						<p class='leading-6 text-muted-fg text-xs'>
							By continuing, you agree to the service's{' '}
							<a href={data.links.termsOfService} class='hover:underline text-primary'>Terms of Service</a> and{' '}
							<a href={data.links.privacyPolicy} class='hover:underline text-primary'>Privacy Policy</a>.
						</p>
					)}
				</Show>

				<div>
					<button
						disabled={dispatching() || describeQuery.isLoading}
						type='submit'
						class={button({ color: 'primary' })}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default AuthLoginPage;
