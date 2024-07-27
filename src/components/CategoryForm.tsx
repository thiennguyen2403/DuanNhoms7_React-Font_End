import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import instance from "../api";
import { Category } from "../interfaces/Category";
import { categorySchema } from "../utils/valtidation";
import axios from "axios";

const CategoryForm = () => {
  const nav = useNavigate();
  const { id } = useParams<string>();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
  });

  const handleCategory = async (data: Category) => {
    try {
      if (id) {
        await instance.patch(`/categories/${id}`, data);
        console.log("Category updated successfully.");
        alert("Sửa thành công");
      } else {
        const res = await instance.post(`/categories`, data);
        console.log("Category created successfully:", res.data);
        alert("Thêm thành công");
      }
      nav("/admin/category");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Request error:", error.message);
      } else if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { data } = await instance.get(`/categories/${id}`);
          reset(data.data); // Ensure this matches the data structure returned by your API
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error("Error fetching category data:", error.message);
          } else {
            console.error("Unexpected error:", error);
          }
        }
      })();
    }
  }, [id, reset]);

  return (
    <form onSubmit={handleSubmit(handleCategory)}>
      <h1>{id ? "Edit Category" : "Add Category"}</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          id="title"
          className="form-control"
          type="text"
          {...register("title")}
        />
        {errors.title && (
          <span className="text-danger">{errors.title.message}</span>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="form-control"
          rows={4}
          {...register("description")}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary w-100">
          {id ? "Edit Category" : "Add Category"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
