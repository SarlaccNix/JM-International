import { Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextWithLine from "../TextDecoration/textDecoration";
import { mountAction } from "@/app/store/store";

const Carusel = ({ sections }: any) => {
  const dispatch = useDispatch();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSectionIndex + 1) % sections.length;
      setCurrentSectionIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSectionIndex, sections.length]);

  const currentSection = sections[currentSectionIndex];

  const handleNext = () => {
    setCurrentSectionIndex((currentSectionIndex + 1) % sections.length);
  };

  const handlePrev = () => {
    setCurrentSectionIndex(
      (currentSectionIndex - 1 + sections.length) % sections.length
    );
  };

  const handleIndicatorPress = (index: number) => {
    setCurrentSectionIndex(index);
  };

  return (
    <div className="carousel-container">
      <VStack marginBottom={10}>
        <TextWithLine text={currentSection.section} />
      </VStack>

      <div className="carousel">
        {/* <IconButton
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
            style={{ marginRight: 10 }}
          /> */}
        {currentSection.products.map((product: any) => (
          <Link
            key={product.id}
            href={{
              pathname: "/products",
            }}
            onClick={() =>
              dispatch(
                mountAction.updateProduct({
                  products: product.name,
                  index: product.title,
                })
              )
            }
            className="carousel-item"
          >
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Image
                className="carousel-img"
                src={product.images[0]}
                alt={product.title}
              />
            </div>

            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>
          </Link>
        ))}
        {/* <IconButton
            isRound={true}
            variant="solid"
            aria-label="Done"
            fontSize="20px"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
          /> */}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 10,
            width: "30%",
            marginTop: 25,
          }}
        >
          {sections.map((_: any, index: any) => {
            console.log("INDEX: ", index);
            console.log("currentSectionIndex: ", currentSectionIndex);
            return (
              <div
                key={index}
                style={{
                  backgroundColor:
                    index === currentSectionIndex ? "red" : "#C9C6C6",
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  margin: 10,
                }}
                onClick={() => handleIndicatorPress(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carusel;