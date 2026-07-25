import DaughterComponent from "./DaughterComponent";

const SonComponent = () => {
  return (
    <div>
      <h1>Introduzione al framework React!</h1>

      <p>La versione che utilizzeremo nel corso è la 19.1</p>

      <div>
        <DaughterComponent />
      </div>
    </div>
  );
};

export default SonComponent;
