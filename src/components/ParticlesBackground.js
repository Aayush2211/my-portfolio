import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
  async function loadParticles(main) {
    await loadFull(main);
  }

  return (
    <Particles
      id="tsparticles"
      options={particleConfig}
      init={loadParticles}
    ></Particles>
  );
};

export default ParticlesBackground;
