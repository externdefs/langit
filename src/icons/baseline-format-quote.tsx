import { type ComponentProps } from 'solid-js';

const FormatQuoteIcon = (props: ComponentProps<'svg'>) => {
	return (
		<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
		</svg>
	);
};

export default FormatQuoteIcon;
