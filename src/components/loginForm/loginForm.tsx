import React from "react";
import { LoginFormComp } from "./styledcomponents";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iLoginRequest } from "../../types/types";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { Input } from "../input/styledComponents";
import { loadingContext } from '../../contexts/loadingContext';
import { CircleLoader, DotLoader, PulseLoader } from "react-spinners";


const LoginForm = () => {
  const { login } = useContext(userContext);
  const {loading, toggleLoading} =useContext(loadingContext)
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Entre um e-mail!")
      .email("Entre um e-mail válido")
      .lowercase(),
    password: yup.string().required("Entre uma senha!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iLoginRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [showPass, toggleShowPass] = useState<boolean>(false);
  return (
    <LoginFormComp onSubmit={handleSubmit((data) => login(data))}>
      <h2>Login</h2>
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input isDirty={isDirty} isValid={error?false:true} type="text" placeholder="digite seu e-mail aqui" onChange={onChange} value={value}/>
        )}
      />

      {<p className="errorMessage">{errors.email?.message}</p>}
      <div className="passwordWrapper">
      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input isDirty={isDirty} isValid={error?false:true} type={showPass ? "text" : "password"} placeholder="digite sua senha" onChange={onChange} value={value}/>
        )}
      />
        {<p className="errorMessage">{errors.password?.message}</p>}
        <button
          type="button"
          onClick={() => toggleShowPass(!showPass)}
          className="passToggle"
        >
          {showPass ? (
            <VisibilityOffIcon sx={{ color: "grey" }} />
          ) : (
            <VisibilityIcon sx={{ color: "grey" }} />
          )}{" "}
        </button>
      </div>

      <button disabled={!isValid || !isDirty || loading } type="submit">
        {loading?<PulseLoader/>:"Logar"}
      </button>
    </LoginFormComp>
  );
};

export default LoginForm;
