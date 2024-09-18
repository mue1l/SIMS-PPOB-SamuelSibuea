import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../assets/IllustrasiLogin.png';
import loginImage2 from '../assets/Logo.png';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate(); // Hook untuk mengarahkan ke halaman lain

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://take-home-test-api.nutech-integrasi.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === 0) {
        // Jika login berhasil, arahkan ke halaman pendaftaran
        navigate('/beranda');
      } else if (result.status === 102) {
        // Penanganan kesalahan format email
        setError("email", { message: result.message });
      } else {
        // Penanganan error lainnya
        alert("Login gagal, silakan coba lagi.");
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

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Masuk atau buat akun untuk memulai
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  id="email"
                  {...register('email', {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  })}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Masukkan email anda"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  {...register('password', {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Masukkan password anda"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
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
            Belum punya akun? Registrasi {" "}
            <Link to="/registration" className="font-semibold leading-6 text-red-600 hover:text-red-500">
              disini
            </Link>
          </p>
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
  );
}

export default LoginForm;
