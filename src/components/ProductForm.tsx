import React, { useEffect } from "react";
import { Product } from "../interfaces/Product";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../utils/valtidation";
import { useParams } from "react-router-dom";
import { instance } from "../api";
type Prop = {
  onSubmit: (product: Product) => void;
};

const ProductForm = ({ onSubmit }: Prop) => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });
  if (id) {
    useEffect(() => {
      (async () => {
        const { data } = await instance.get(`/products/${id}`);
        reset(data);
      })();
    }, [id]);
  }
  return (
    <div>
      <h1>{id ? "Edit-Product" : "Add-product"}</h1>
      <form onSubmit={handleSubmit((product) => onSubmit({ ...product, id }))}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="text-danger">{errors.title.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">price</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("price", { valueAsNumber: true })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">description</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("description", { required: true })}
          />
          {errors.description && <div>{errors.description.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
