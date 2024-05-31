'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React, { FC } from 'react';

type LoginProps = {};

const Login: FC<LoginProps> = ({}) => {
  // api

  // hooks

  // states
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  // variables

  // styles

  // functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
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
          <h1 className='text-3xl font-bold'>Login</h1>
          <p className='text-balance text-muted-foreground'>
            Enter your email below to login to your account
          </p>
        </div>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <Link
                href='/forgot-password'
                className='ml-auto inline-block text-sm underline'
              >
                Forgot your password?
              </Link>
            </div>
            <Input
              id='password'
              type='password'
              placeholder='********'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </div>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?
          <Link href='/auth/register' className='underline'>
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
