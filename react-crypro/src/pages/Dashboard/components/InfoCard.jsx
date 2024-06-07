import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ Tagtext, ImgUrl, text, inverted }) => {
  return (
    <CustomCard
      bgImage={ImgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "white" : "p.purple"}
    >
      <Tag
        bg={inverted ? "p.purple" : "white"}
        color={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {Tagtext} 
      </Tag>
      <Text
        textStyle="h5"
        color={inverted ? "black" : "white"}
        mt="4"
        fontWeight="medium"
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
