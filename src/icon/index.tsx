 import icons, { Props } from './icons';
const DefaultConfig = {
	main: {
		iconType: 'duotone',
	},
};

// form file REACT_APP_BASE_LAYOUT_CONFIG_KEY = metronic-react-demo1-8150
const LAYOUT_CONFIG_KEY =
	process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig';
export const getLayoutFromLocalStorage = () => {
	const ls =
		typeof window !== 'undefined' && localStorage.getItem(LAYOUT_CONFIG_KEY);
	if (ls) {
		try {
			return JSON.parse(ls);
		} catch (er) {
			console.error(er);
		}
	}
	return DefaultConfig;
};

const KTIcon: React.FC<Props> = ({ className = '', iconType, iconName }) => {
	if (!iconType) {
		iconType = getLayoutFromLocalStorage().main?.iconType;
	}

	return (
		<i
			className={`ki-${iconType} ki-${iconName}${className && ' ' + className}`}
		>
			{iconType === 'duotone' &&
				[...Array(icons[iconName])].map((e, i) => {
					return (
						<span
							key={`${iconType}-${iconName}-${className}-path-${i + 1}`}
							className={`path${i + 1}`}
						></span>
					);
				})}
		</i>
	);
};

export { KTIcon };
