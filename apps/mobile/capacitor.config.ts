import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.roadhero.app",
  appName: "RoadHero",
  webDir: "build",
  bundledWebRuntime: false,

  // remove when building for production
  server: {
    url: "http://192.168.0.225:5173", // hynetflex 5g 5ghz
    // url: "http://192.168.0.107:5173", // hynetflex 5ghz
    // url: "http://192.168.0.59:5173", // hynetflex 5G 2.4ghz
    // url: "http://192.168.92.22:5173", // redmi hotspot
    cleartext: true,
  },

  plugins: {
    CapacitorCookies: {
      enabled: true,
    },
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
