import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../authContext";
import { useLocation } from "react-router-dom";

const Reset = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const token = query.get("token");
  const userId = query.get("userId");

  const { reset, invalidResetPassword, messageResetPassword } = useAuth();
  const formik = useFormik({
    initialValues: { password: "" },
    validationSchema: Yup.object().shape({
      password: Yup.string().required("Required field"),
    }),
    onSubmit: (values, formik) =>
      reset({ password: values.password, userId, token }),
  });

  return (
    <div className="component">
      <div>
        <p>Reset password</p>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="pass">New password</label>
          <input
            name="password"
            value={formik.values.password}
            type="password"
            id="pass"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div>{formik.errors.password}</div>
          )}
          <input type="submit" value="Submit" disabled={formik.isSubmitting} />
          <div>{messageResetPassword}</div>
          {invalidResetPassword && !messageResetPassword && (
            <div>Please enter correct details!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Reset;
