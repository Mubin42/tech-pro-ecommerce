import Image from 'next/image';
import React, { FC } from 'react';

type AuthPageLayoutProps = {
	children: React.ReactNode;
};

const AuthPageLayout: FC<AuthPageLayoutProps> = ({ children }) => {
	// api

	// hooks

	// states

	// variables

	// styles

	// functions

	// effects

	// components
	const left = (
		<div className='hidden bg-muted lg:block'>
			<Image
				src='/placeholder.svg'
				alt='Image'
				width='1920'
				height='1080'
				className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
			/>
		</div>
	);

	return (
		<div className='w-screen h-screen lg:grid lg:grid-cols-2'>
			{left}
			{children}
		</div>
	);
};

export default AuthPageLayout;
