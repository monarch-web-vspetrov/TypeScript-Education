interface BasicConfig {
  protocol: string;
  port: number;
  role?: string;
}

const newServConfig1: BasicConfig = {
  protocol: "http",
  port: 3000,
  role: "admin",
};

const backupConfig: BasicConfig = {
  protocol: "http",
  port: 3000,
};

function startNewStartServer(congig: BasicConfig): "Server started" {
  console.log(
    `${congig.protocol}://${congig.port} server started ${
      congig.role ? congig.role : ""
    }`
  );
  return "Server started";
}

startNewStartServer(newServConfig1);
startNewStartServer(backupConfig);
