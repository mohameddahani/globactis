import NavBar from "@/components/Navbar";
import Background from "@/components/background";

const Home = () => {
  return (
    <div>
      <Background
        beamWidth={2}
        beamHeight={15}
        beamNumber={12}
        lightColor="#ffffff"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={0}
      />
      <NavBar />
    </div>
  );
};

export default Home;
