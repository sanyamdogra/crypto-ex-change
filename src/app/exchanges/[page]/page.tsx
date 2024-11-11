interface ExchangePageProps {
  params: Promise<{ page: string }>;
}

export default async function ExchangePage({ params }: ExchangePageProps) {
  const { page: pageNumber } = await params;

  return (
    <>
      <div>{pageNumber}</div>
    </>
  );
}
