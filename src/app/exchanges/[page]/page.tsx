import { fetchExchanges } from "@/services";
import { formatPageNumber } from "@/utils/helpers";
import ExchangeTable from "@/components/ExchangeTable";
import Pagination from "@/components/Pagination";

interface ExchangePageProps {
  params: Promise<{ page: string }>;
}

export default async function ExchangePage({ params }: ExchangePageProps) {
  const { page: pageNumber } = await params;

  const page = formatPageNumber(pageNumber);

  const { data: exchanges, status, error } = await fetchExchanges(page);

  if (error) {
    return (
      <div>
        {error} {status}
      </div>
    );
  }

  return (
    <>
      <ExchangeTable exchanges={exchanges} />
      <Pagination currentPage={page} />
    </>
  );
}
