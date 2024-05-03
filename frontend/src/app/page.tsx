import PageLayout from '@/components/layout/page-layout/PageLayout';
import CenterSection from '@/components/layout/section/CenterSection';
import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<PageLayout>
			<Flex h='300px' bgColor='blue'>
				Hero Section
			</Flex>
			<CenterSection>
				<Flex h='300px' bgColor='green'>
					Hero Section
				</Flex>
			</CenterSection>
		</PageLayout>
	);
}
