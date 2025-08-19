import NavBar from "../components/CardNav";
import Background from "../components/Background";

const Home = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background
        beamWidth={2}
        beamHeight={150}
        beamNumber={10}
        lightColor="#FEB50F"
        speed={2}
        noiseIntensity={1.5}
        scale={0.2}
        rotation={40}
      />
      <div className="absolute top-0 left-0 w-full z-10">
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
