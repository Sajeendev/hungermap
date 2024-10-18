interface Hazard {
  severity: string;
  type: string;
  name: string;
  latitude: number;
  longitude: number;
  created: string;
  lastUpdate: string;
}

export interface HazardData {
  hazards: Hazard[];
}

export interface HazardsResponse {
  statusCode: string;
  body: HazardData;
}
