import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import useClipboard from "react-use-clipboard";
import {
  Input,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Dva() {
  const { register, handleSubmit } = useForm();

  const [costPrice, setCostPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();

  const onSubmit = (formData) => {
    setCostPrice(formData.costPrice);
    setSellingPrice(formData.sellingPrice);
  };

  const grossMarginCacul = (costPrice, sellingPrice) => {
    const number = (costPrice / sellingPrice - 1) * 100;
    return number.toFixed(2);
  };
  // eslint-disable-next-line no-unused-vars
  const [isCopied, setCopied] = useClipboard(
    grossMarginCacul(costPrice, sellingPrice)
  );

  return (
    <>
      <Typography variant="h1">Marge Brut</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Prix de revient" {...register("costPrice")} />
        <Input label="Prix de vente" {...register("sellingPrice")} />
        <Button type="submit">Button</Button>
      </form>
      <Typography id="result">
        {grossMarginCacul(costPrice, sellingPrice)}
      </Typography>
      <IconButton
        onClick={() => (
          setCopied,
          alert(
            `${grossMarginCacul(
              costPrice,
              sellingPrice
            )} copié dans le presse-papier`
          )
        )}
      >
        <i className="fa-solid fa-copy"></i>
      </IconButton>
    </>
  );
}

export default Dva;
