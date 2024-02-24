// Interface

type InterfaceConfig = {
  protocol: "http" | "https";
  port: 3000 | 3001;
};

interface ConfigInterface {
  protocol: "http" | "https";
  port: 3000 | 3001;
}

interface Role {
  role: string;
}

interface ConfigWithRole extends Config, Role {
  test: string;
}

const interfaceServerConfig: InterfaceConfig = {
  protocol: "http",
  port: 3000,
};

// ______________________________

interface ConfigNew {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface RoleNew {
  role: string;
}

interface ConfWithRole extends ConfigNew, RoleNew {
  test: string;
}

const newServConfig: ConfWithRole = {
  protocol: "http",
  port: 3000,
  test: "test",
  role: "admin",
  log: (msg: string): void => {
    console.log("qeqwe");
  },
};

// type newStartFunction = (
//   protocol: "http" | "https",
//   port: 3000 | 3001,
//   log: (msg: string) => void
// ) => string;

function newStartServer(
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" {
  console.log(`${protocol}://${port} server started`);
  return "Server started";
}

newStartServer(newServConfig.protocol, newServConfig.port, newServConfig.log);
// Индексные свойства
// ТАкой подход полезен когда ты не знаешь сколько ключей будет в том или ином объекте, но знаешь точно какими они будут типами.
interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "10px",
  bottom: "10px",
};
