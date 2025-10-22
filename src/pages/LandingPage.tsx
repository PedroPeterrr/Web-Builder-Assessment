import { Header, Hero, About, Services, FeaturedListing, PhotoGallery, SearchListing, Contact, Map, Footer, Company } from './index';

export default function LandingPage(){
  return(
    <section >
      <Header />
      <Hero />
      <About />
      <Services />
      <FeaturedListing />
      <PhotoGallery />
      <Company />
      <SearchListing />
      <Contact />
      <Map />
      <Footer />
    </section>
  )
}