import React from "react";
import FormRow from "../../ui/components/FormRow";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

const CreateCabinForm = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data)
    mutate({...data, image:data.image[0]});
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      className={`p-6 bg-gray-50 border border-gray-200 rounded-md overflow-hidden text-sm`}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-sm p-2 shadow-sm"
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-sm p-2 shadow-sm"
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-sm p-2 shadow-sm"
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          className="border border-gray-300 bg-gray-50 rounded-sm p-2 shadow-sm"
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <textarea
          className="p-2 border border-gray-300 rounded-sm bg-gray-50 shadow-sm w-full h-32"
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <input
          className="text-base rounded-sm file:font-inherit file:font-medium file:p-2 file:mr-3 file:rounded-sm file:border-none file:text-brand-50 file:bg-brand-600 file:cursor-pointer file:transition file:hover:bg-brand-700"
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            // required: "This field is required",
          })}
        />
      </FormRow>

      <div>
        <button variation="secondary" type="reset">
          Cancel
        </button>
        <button disabled={isCreating} type="submit">
          Add cabin
        </button>
      </div>
    </form>
  );
};

export default CreateCabinForm;
