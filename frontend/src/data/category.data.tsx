import {
  Gamepad2,
  Headphones,
  Laptop,
  Mail,
  Smartphone,
  Tablet,
  Watch,
} from 'lucide-react';

type CategoryDataType = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const categoryData: CategoryDataType[] = [
  {
    href: '/',
    label: 'Mobile',
    icon: <Smartphone className='mr-2 h-4 w-4' />,
  },
  {
    href: '/',
    label: 'Laptop',
    icon: <Laptop className='mr-2 h-4 w-4' />,
  },
  {
    href: '/',
    label: 'Tablet',
    icon: <Tablet className='mr-2 h-4 w-4' />,
  },
  {
    href: '/',
    label: 'Smartwatch',
    icon: <Watch className='mr-2 h-4 w-4' />,
  },
  {
    href: '/',
    label: 'Headphones',
    icon: <Headphones className='mr-2 h-4 w-4' />,
  },
  {
    href: '/',
    label: 'Accessories',
    icon: <Gamepad2 className='mr-2 h-4 w-4' />,
  },
];

export default categoryData;
