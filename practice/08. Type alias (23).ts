// Псевдонимы типов Type Aliases

type AnimationTimingFunc = "ease" | "ease-in" | "ease-out";
type AnimationId = string | number;

// ____________________________

const serverConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  test: "no",
};

startServer(serverConfig.protocol, serverConfig.port);

// ______________________________
// types  additionals

type Config = {
  protocol: "http" | "https";
  port: 3000 | 3001;
};

// ____________________________
// Перенесение типов

// type Role = {
//   role: string;
// };

// type ConfigWithRole = Config & Role;

const typeMerge: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "admin",
  test: "no",
};

// Аналогично и для функций

type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;
