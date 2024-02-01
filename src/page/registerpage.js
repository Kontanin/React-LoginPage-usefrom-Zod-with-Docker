import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import doPostRequest from '../req/req';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputWithLabel from '../component/InputWithLabel';
function Register() {
  const navigate = useNavigate();

  const registerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    fristname: z.string(),
    lastname: z.string(),
    username: z.string(),
    // confirmPassword: z.string(),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onhandle = (e) => {
    let payload = e;

    console.log(payload);
    let result = doPostRequest(payload, 'http://localhost:5000/register');
    if (result) {
      navigate('/');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center rounded-lg ">
      <div className="bg-violet-950 rounded-lg   text-zinc-50 text-black">
        <h1 className="flex items-center justify-center text-slate-200 ">
          Register
        </h1>
        <form onSubmit={handleSubmit(onhandle)}>
          <div className="bg-stone-50 border text-black">
            <div>
              <InputWithLabel
                label={'fristname'}
                placeholder={'fristname'}
                error={errors?.fristname}
                form={register('fristname')}
              />
            </div>

            <div>
              <InputWithLabel
                label={'lastname'}
                placeholder={'lastname'}
                error={errors?.lastname}
                form={register('lastname')}
              />
            </div>

            <div>
              <InputWithLabel
                label={'username'}
                placeholder={'username'}
                error={errors?.username}
                form={register('username')}
              />
            </div>
            <div>
              <InputWithLabel
                label={'email'}
                placeholder={'email'}
                error={errors?.email}
                form={register('email')}
              />
            </div>

            <div>
              {/* {/* <InputWithLabel 
label={"confirmPassword"}
placeholder={"confirmPassword"}
error={errors?.confirmPassword}
from={register("confirmPassword")}
/> */}
              <InputWithLabel
                label={'Password'}
                placeholder={'Password'}
                error={errors?.password}
                form={register('password')}
              />
            </div>

            <div className="flex content-center justify-center  w-25 bg-stone-50 border text-zinc-50">
              <button className="content-center w-32 bg-purple-500 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex content-center  justify-center  text-zinc-50">
          <h6 className="mr-1 ">if you already have account please </h6>
          <Link to="/" className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
