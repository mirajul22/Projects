import Hero from "./components/Hero";

const Home = () => {
  const data = { name: "Before They Sold Out" };
  return (
    <>
      <Hero MyData={data} />
    </>
  );
};

export default Home;
