'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React, { FC } from 'react';

type RegisterPageProps = {};

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  // api

  // hooks

  // states
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // variables

  // styles

  // functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      email,
      password,
    });
  };

  // effects

  // components

  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-auto grid w-[350px] gap-6'>
        <div className='grid gap-2 text-center'>
          <h1 className='text-3xl font-bold'>Register</h1>
          <p className='text-balance text-muted-foreground'>
            Enter your credentials below to create an account
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              placeholder='John Doe'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              placeholder='m@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' className='w-full'>
            Register
          </Button>
        </div>
        <div className='mt-4 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/auth/login' className='underline'>
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
