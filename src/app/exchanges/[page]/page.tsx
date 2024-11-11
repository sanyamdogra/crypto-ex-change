import { fetchExchanges } from "@/services";
import { formatPageNumber } from "@/utils/helpers";

interface ExchangePageProps {
  params: Promise<{ page: string }>;
}

export default async function ExchangePage({ params }: ExchangePageProps) {
  const { page: pageNumber } = await params;

  const page = formatPageNumber(pageNumber);

  const { data: exchanges, status, error } = await fetchExchanges(page);

  console.log(exchanges);

  if (error) {
    return (
      <div>
        {error} {status}
      </div>
    );
  }

  return (
    <>
      <div>{pageNumber}</div>
    </>
  );
}
