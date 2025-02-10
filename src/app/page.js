import Header from "./Pages/Header/Page"
import Hero from "./Pages/Hero/Page"
import BestSeller from "./Pages/BestSeller/Page"
import Categories from "./Pages/Categories/Page"
import Products from "./Pages/Products/Page"
import Accessories from "./Pages/Accessories/Page"
import Footer from "./Pages/Footer/Page"


const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <BestSeller />
      <Categories />
      <Products />
      <Accessories />
      <Footer />
    </>
  )
}

export default page