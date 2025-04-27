import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  //Filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  //Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  //Query
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, sortBy, currentPage],
    queryFn: () => getAllBookings({ filter, sortBy, currentPage }),
  });

  //Pre-Fetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (currentPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage + 1],
      queryFn: () =>
        getAllBookings({ filter, sortBy, currentPage: currentPage + 1 }),
    });

  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, currentPage - 1],
      queryFn: () =>
        getAllBookings({ filter, sortBy, currentPage: currentPage - 1 }),
    });
  return { isLoading, bookings, count };
}

export default useBookings;
