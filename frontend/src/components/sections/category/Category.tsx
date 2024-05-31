import CategoryCard from '@/components/reusable-ui/cards/category-card/CategoryCard';
import React, { FC } from 'react';

type CategoryProps = {};

const Category: FC<CategoryProps> = ({}) => {
  // api

  // hooks

  // states

  // variables

  // styles

  // functions

  // effects

  // components

  return (
    <div className='w-full bg-slate-50 py-32'>
      <div className='px-4 flex flex-col gap-4 max-w-[1440px] mx-auto'>
        <h1 className='text-xl font-semibold'>Browse By Category</h1>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4'>
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <CategoryCard key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
