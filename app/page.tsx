import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import About from "@/components/About";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Podcast from "@/components/Podcast";

const Home = () => {
    return (
        <main>
            <Hero />
            <Companies />
            <About />
            <Podcast />
            <Clients />
            <Team />
            <Contact />
        </main>
    )
}

export default Home
