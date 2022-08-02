import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import useClipboard from "react-use-clipboard";
import { Input, Button, IconButton } from "@material-tailwind/react";

function Dva() {
  const { register, handleSubmit } = useForm();

  const [costPrice, setCostPrice] = useState();
  const [sellingPrice, setSellingPrice] = useState();

  const onSubmit = (formData) => {
    setCostPrice(formData.costPrice);
    setSellingPrice(formData.sellingPrice);
  };

  const grossMarginCalcul = (costPrice, sellingPrice) => {
    const number = (costPrice / sellingPrice - 1) * 100;
    return number.toFixed(2);
  };

  const grossMarginResult = grossMarginCalcul(costPrice, sellingPrice);

  // eslint-disable-next-line no-unused-vars
  const [isCopied, setCopied] = useClipboard(grossMarginResult);

  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-10">Marge Brut</h1>
      <div className="flex flex-col items-center">
        <form
          className="flex flex-col items-center space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input label="Prix de revient" {...register("costPrice")} />
          <Input label="Prix de vente" {...register("sellingPrice")} />
          <Button size="sm" type="submit">
            Calcule
          </Button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center justify-center w-40 h-10 border border-blue-600 rounded-l-lg">
            <p className="text-center">
              {grossMarginResult === NaN ? "---" : grossMarginResult}
            </p>
          </div>
          <div>
            <IconButton
              className="rounded-none rounded-r-lg"
              onClick={() => (
                setCopied,
                alert(`${grossMarginResult} copié dans le presse-papier`)
              )}
            >
              <i className="fa-solid fa-copy"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dva;
