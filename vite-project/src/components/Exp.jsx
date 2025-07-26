import { FaBolt, FaRocket, FaLightbulb, FaTools } from "react-icons/fa";

export const Exp = () => {
  return (
    <>
      <div className="Exp">
        <h1 className="heading">
          ExpDigital: The Architecture of Your Online Success
        </h1>
        <p>
          We are specialists in creating complete and integrated digital
          solutions. Our mission is to be your single partner for all digital
          needs, offering innovation, agility, and exceptional results.
        </p>

        <div className="card">
          <div className="card1">
            <FaBolt size={40} />
            <h1>Agility</h1>
            <h2>Fast and efficient deliveries</h2>
          </div>
          <div className="card1">
            <FaRocket size={40} />
            <h1>Innovation</h1>
            <h2>Creative tech solutions</h2>
          </div>
          <div className="card1">
            <FaLightbulb size={40} />
            <h1>Strategy</h1>
            <h2>Smart digital planning</h2>
          </div>
          <div className="card1">
            <FaTools size={40} />
            <h1>Support</h1>
            <h2>Reliable service</h2>
          </div>
        </div>
      </div>
    </>
  );
};
