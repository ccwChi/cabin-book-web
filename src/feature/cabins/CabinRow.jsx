import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const Img = ({ src }) => (
  <img
    src={src}
    className="block w-16 aspect-[3/2] object-cover object-center transform scale-150 "
    alt=""
  />
);

const Cabin = ({ children }) => (
  <div className="text-lg font-semibold text-gray-600 font-sono">
    {children}
  </div>
);

const Price = ({ children }) => (
  <div className="font-sono font-semibold">{children}</div>
);

const Discount = ({ children }) => (
  <div className="font-sono font-medium text-green-700">{children}</div>
);

function CabinRow({ cabin }) {
  //   const { isDeleting, deleteCabin } = useDeleteCabin();
  //   const { isCreating, createCabin } = useCreateCabin();
  const queryClient = useQueryClient();

  const { isLoading: isPending, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin delete success");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  //   function handleDuplicate() {
  //     createCabin({
  //       name: `Copy of ${name}`,
  //       maxCapacity,
  //       regularPrice,
  //       discount,
  //       image,
  //       description,
  //     });
  //   }

  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-6 items-center px-2 py-4 border-t-2">
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div className="flex gap-1">
        <button className="p-1  border rounded-md shadow-[1px_2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-gray-200">
          Edit
        </button>
        <button
          className="p-1  border rounded-md shadow-[1px_2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-gray-200"
          onClick={() => mutate(cabinId)}
          disabled={isPending}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CabinRow;
