import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Paasword"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
