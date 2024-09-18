import loginImage from '../assets/IllustrasiLogin.png';
import loginImage2 from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate(); // Hook untuk mengarahkan ke halaman lain

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://take-home-test-api.nutech-integrasi.com/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 0) {
        // Jika registrasi berhasil
        alert(result.message);
        navigate('/login');
      } else if (result.status === 102) {
        // Jika ada error pada format email atau email sudah terdaftar
        setError("email", { message: result.message });
      } else {
        // Jika ada error lain
        alert("Registrasi gagal, silakan coba lagi.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Terjadi kesalahan pada server.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center">
          <img
          src={loginImage2}  
          alt="Login Image"
          className="h-10 w-auto"
          />
          <h2 className="text-xl font-bold leading-9 tracking-tight text-gray-900 ml-2">
            SIMS PPBOB
            </h2>
            </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"><h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Masuk atau buat akun untuk memulai
          </h2></div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
             <div className="relative">
              <input
             id="email"
             type="email"
             {...register('email', { required: 'Email wajib diisi', pattern: /^\S+@\S+$/i })}
              placeholder="masukan email anda"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              <div className="relative">
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              <input
              id="first_name"
              type="text"
              {...register('first_name', { required: 'First name wajib diisi' })}
              autoComplete="first_name"
              placeholder="nama depan"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                {errors.first_name && <p className="text-red-500">{errors.first_name.message}</p>}
              </div>

              <div className="relative">
              <input
               id="last_name"
               type="text"
               {...register('last_name', { required: 'Last name wajib diisi' })}
              required
              placeholder="nama belakang"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                 {errors.last_name && <p className="text-red-500">{errors.last_name.message}</p>}
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  {...register('password', { required: 'Password wajib diisi', minLength: { value: 8, message: 'Password minimal 8 karakter' } })}
                  required
                  autoComplete="current-password"
                  placeholder="Masukkan password anda"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              {/* <div className="relative">
                <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="konfigurasi password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Masuk
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Sudah punya akun? Login {' '}
            <Link to="/login" className="font-semibold leading-6 text-red-600 hover:text-red-500">
              disini  
            </Link>
          </p>
        </div>
        <div className="mt-10 justify-right">

        </div>
      </div>

    <div className="w-1/2 flex justify-center items-center">
  <img
    src={loginImage}  
    alt="Login Image"
    className="w-full h-full object-cover"  
  />
</div>
  </div>
  
  
  )
    
  
}

export default RegisterForm
