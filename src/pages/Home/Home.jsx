import { Footer, NavBar, Destacadas, CategoriasPeliculas } from "../../components";

function Home() {
  return (
    <>
      <NavBar />
      <div className="Container-Home h-100 w-100">
        <Destacadas />

        <CategoriasPeliculas></CategoriasPeliculas>
      </div>

      <Footer />
    </>
  )
}

export default Home
