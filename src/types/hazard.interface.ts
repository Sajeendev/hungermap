export interface Hazard {
  severity: string;
  type: string;
  name: string;
  latitude: number;
  longitude: number;
  created: string;
  lastUpdate: string;
}

export interface HazardsResponse {
  statusCode: string;
  body: {
    hazards: Hazard[];
  };
}
