import { Center, Flex, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

type PageLayoutProps = {
	children: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components

	return (
		<Flex flexDirection='column' h='100vh' w='100vw' bgColor='red'>
			<Text>Navbar</Text>
			{children}
			<Text>Footer</Text>
		</Flex>
	);
};

export default PageLayout;
