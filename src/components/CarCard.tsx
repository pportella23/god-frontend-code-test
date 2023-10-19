import { Flex, Link, Spacer, Text } from "vcc-ui";
import { Car } from "../types/car.interface";
import Image from "next/image";

import styles from "../../public/css/carCard.module.css";

interface CardProps {
  car: Car;
}

export function CarCard({ car }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <Text variant="bates" subStyle="emphasis">
        {car?.bodyType}
      </Text>
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: 0,
        }}
      >
        <Text variant="amundsen">{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">
          {car?.modelType}
        </Text>
      </Flex>
      <Spacer />
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        width={250}
        height={200}
      ></Image>
      <Spacer />
      <Flex
        extend={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={"/learn/" + car?.id} arrow="right">
          SHOP
        </Link>
        <Link href={"/learn/" + car?.id} arrow="right">
          LEARN
        </Link>
      </Flex>
    </div>
  );
}
