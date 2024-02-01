import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import doPostRequest from '../req/req';
import { z } from 'zod';
import InputWithLabel from '../component/InputWithLabel';
import { zodResolver } from '@hookform/resolvers/zod';
function Login() {
  const navigate = useNavigate();
  const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const onhandle = async (data) => {
    let result = await doPostRequest(data, 'http://localhost:5000/login');
    console.log(result, 'result');
    if (result) {
      navigate('/home');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center rounded-lg  ">
      <div className="bg-violet-950 rounded-lg   text-zinc-50">
        <h1 className="flex items-center justify-center">login</h1>
        <div className="bg-stone-400 rounded-lg">
          <form onSubmit={handleSubmit(onhandle)}>
            <div className="flex flex-col bg-stone-50 border text-black">
              <InputWithLabel
                label={'email'}
                placeholder={'email'}
                error={errors?.email}
                form={register('email')}
              />

              <InputWithLabel
                label={'password'}
                placeholder={'password'}
                error={errors?.password}
                form={register('password')}
              />
            </div>

            <div className="flex content-center justify-center  w-25 bg-stone-50 border text-zinc-50">
              <button className="content-center w-32 bg-purple-500 rounded-lg ">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex content-center  justify-center">
          <h6 className="mr-1">if you don't have account please </h6>
          <Link to="/Register" className="flex justify-center underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
