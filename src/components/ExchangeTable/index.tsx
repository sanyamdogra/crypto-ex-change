"use client";

import Image from "next/image";
import { Badge, Box, Flex, Table } from "@radix-ui/themes";

import { BadgeColors, Exchange } from "@/types";
import { getColor } from "@/utils/helpers";

import styles from "./ExchangeTable.module.css";

interface Props {
  exchanges: Exchange[];
}

const ExchangeTable: React.FC<Props> = ({ exchanges }) => {
  return (
    <Box className={styles.container}>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row align={"center"}>
            <Table.ColumnHeaderCell width={"25%"}>
              Exchange Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Year Established</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Trust Score</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              24h Trade Volume (BTC)
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              Normalized Volume (BTC)
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {exchanges.map((exchange) => (
            <Table.Row
              key={exchange.id}
              align={"center"}
              className={styles.rowCell}
              onClick={() =>
                window.open(exchange.url, "_blank", "noopener,noreferrer")
              }
            >
              <Table.Cell>
                <Flex align={"center"} justify={"start"}>
                  <Image
                    src={exchange.image}
                    alt={`${exchange.name} Image`}
                    width={24}
                    height={24}
                    className={styles.image}
                  />
                  {exchange.name}
                </Flex>
              </Table.Cell>
              <Table.Cell> {exchange.year_established || "-"}</Table.Cell>
              <Table.Cell> {exchange.country || "-"}</Table.Cell>
              <Table.Cell>
                <Badge
                  size="2"
                  color={getColor(exchange.trust_score) as BadgeColors}
                >
                  {exchange.trust_score || "N/A"}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                {exchange.trade_volume_24h_btc.toFixed(2) || "-"}
              </Table.Cell>
              <Table.Cell>
                {exchange.trade_volume_24h_btc_normalized.toFixed(2) || "-"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default ExchangeTable;
