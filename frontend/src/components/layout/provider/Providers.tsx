'use client';
import { store } from '@/store';
import { theme } from '@/theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

type ProvidersProps = {
	children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Provider store={store}>
			<ChakraProvider>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				{children}
			</ChakraProvider>
		</Provider>
	);
};

export default Providers;
