import React from "react";


import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { iSentenceRequest } from "../../types/types";
import { Input, Select } from "../input/input";
import { PulseLoader } from "react-spinners";
import { Form } from "../form/form";
import { useLoading } from "../../hooks/useLoading";
import { Button } from "../buttons/button";

const EditSentenceForm = () => {
 
  const { loading } = useLoading();
  const schema = yup.object().shape({
    sentence: yup.string().required("Frase deve ter um corpo!").matches(/^[a-z]{20,366}$/, "frase deve ter pelo menos 20 e no máximo 366 caracteres!"),
    type: yup.string().required("Frase deve ter um tipo!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<iSentenceRequest>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });


  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>{/*Adicionar função de editar frase posteriormmente*/}
      <h2>Editar Frase</h2>
      <Controller
        control={control}
        /*defaultValue={sentence.text}/*para que o input comece já com os dados de cada campo.*/
        name="sentence"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Input
            isDirty={isDirty}
            isValid={error ? false : true}
            type="text"
            placeholder="digite suas edições aqui"
            onChange={onChange}
            value={value}
          />
        )}
      />

      {<p className="errorMessage">{errors.sentence?.message}</p>}

      <Controller
        control={control}
        /*defaultValue={sentence.text}/*para que o input comece já com os dados de cada campo.*/
        name="type"
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, isDirty, error },
          formState,
        }) => (
          <Select
            isDirty={isDirty}
            isValid={error ? false : true}
            placeholder="selecione o novo tipo"
            onChange={onChange}
            value={value}
          >
            <option value="Formal">Formal</option>
            <option value="Engraçadas">Engraçadas</option>
            <option value="Criativas">Criativas</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Intimidade">Intimidade</option>
            <option value="Paquera">Paquera</option>
          </Select>
        )}
      />
      {<p className="errorMessage">{errors.type?.message}</p>}

      <Button
        text={loading ? <PulseLoader /> : "Confirmar Alterações"}
        buttonSize="default"
        buttonStyle="bg-ColorBlue"
        disabled={!isValid || !isDirty || loading}
        type="submit"
      />
    </Form>
  );
};

export default EditSentenceForm;
