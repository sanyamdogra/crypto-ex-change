import { Exchange } from "@/types";
import { BASE_API_URL, ITEMS_PER_PAGE } from "@/utils/constants";

interface FetchExchangesResponse {
  data: Exchange[];
  status: number;
  error?: string;
}

const fetchExchanges = async (
  page: number
): Promise<FetchExchangesResponse> => {
  let status;

  try {
    const res = await fetch(
      `${BASE_API_URL}?per_page=${ITEMS_PER_PAGE}&page=${page}`,
      { next: { revalidate: 60 } }
    );

    status = res.status;

    if (!res.ok) throw new Error(`Failed to fetch data: ${status}`);

    const data = await res.json();

    return { status, data };
  } catch (error) {
    console.error(error);

    return {
      data: [],
      status: status || 500,
      error: "Failed to load the data !",
    };
  }
};

export { fetchExchanges };
