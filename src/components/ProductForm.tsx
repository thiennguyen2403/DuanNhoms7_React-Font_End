import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../interfaces/Product";
import { instance } from "../api";

const productSchema = z.object({
  title: z.string().min(6),
  price: z.number().min(0),
  description: z.string().optional(),
});

const ProductForm = () => {
  const { id } = useParams();
  const { handleProduct } = useContext(ProductContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`);
        console.log("Fetched data:", data); // Log dữ liệu
        reset(data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit((data) => handleProduct({ ...data, id }))}>
        <h1>{id ? "Update product" : "Add product"}</h1>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-danger">{errors.price.message}</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            rows={4}
            className="form-control"
            {...register("description")}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100">
            {id ? "Update product" : "Add product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
