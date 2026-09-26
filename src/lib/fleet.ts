export type FaultKind = "none" | "bearing" | "overheat" | "current" | "voltage";
export type SensorKey = "vibration" | "temperature" | "current" | "voltage";

/** Machine DNA: each asset learns its own baseline (mean ± sigma) instead of generic thresholds. */
export const SENSOR_KEYS = ["vibration", "temperature", "current", "voltage"] as const;
