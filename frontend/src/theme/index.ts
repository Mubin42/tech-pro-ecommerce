import { ThemeConfig } from '@chakra-ui/react';
import colors from './colors.theme';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export const breakpoints = {
	base: '0px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1280px',
};

export const theme = {
	colors,
	config,
	breakpoints,
};
