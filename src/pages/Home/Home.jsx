import Feature from '../../components/Feature/Feature'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'

/**
 * React component for the Home page
 * @component
 */
function Home() {
  return (
    <div className="body">
      <Header />
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
            iconName="icon-chat"
          />
          <Feature
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
            iconName="icon-money"
          />
          <Feature
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money
            is always safe."
            iconName="icon-security"
          />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
