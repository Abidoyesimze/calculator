import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const AreaCalculatorModule = buildModule("AreaCalculatorModule", (m) => {
 

  const areaCalculator = m.contract("AreaCalculator");

  return { areaCalculator };
});

export default AreaCalculatorModule;
