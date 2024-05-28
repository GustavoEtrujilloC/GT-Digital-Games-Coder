import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { Paper, useMantineTheme } from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import Button1 from "../Buttons/Button1";
import { useProducts } from "../../../Context/ProductosContext";
import { Link } from "react-router-dom";
import "./CardsCarousel.module.css";

function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const { productos } = useProducts();

  const slides = productos.map((item, id) => {
    return (
      <Carousel.Slide key={id}>
        <Card id={item.id} price={item.price} image={item.image} />
      </Carousel.Slide>
    );
  });

  return (
    <Carousel
      slideSize={{ base: "100%", md: "33%", lg: "25%", xs: "50%" }}
      slideGap={{ base: "md" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;

function Card({ image, price, id }) {
  return (
    <Paper
      shadow="md"
      p="md"
      radius="0"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.cardcarousel}
    >
      <div className={classes.buy_buttom}>
        <h3 className={classes.carousel_price}>{price}$</h3>
        <Link to={`/item/${id}`}>
          <Button1>Comprar</Button1>
        </Link>
      </div>
    </Paper>
  );
}
