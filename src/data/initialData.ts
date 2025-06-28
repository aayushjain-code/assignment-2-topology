import { Node } from "../types/node";
import { SiteData } from "../types/site";

export interface Edge {
  source: string;
  target: string;
}

export const INITIAL_NODES: Node[] = [
  { id: "google", label: "Google", x: 200, y: 100 },
  { id: "ny", label: "New York-Sites", x: 100, y: 500 },
  { id: "nj", label: "New Jersey-Sites", x: 300, y: 500 },
  { id: "vt", label: "Vermont-Sites", x: 500, y: 500 },
  { id: "ma", label: "Massachusetts-Sites", x: 700, y: 500 },
  { id: "ca", label: "California-Sites", x: 1010, y: 500 },
];

export const EDGES: Edge[] = [
  { source: "google", target: "ny" },
  { source: "google", target: "nj" },
  { source: "google", target: "vt" },
  { source: "google", target: "ma" },
  { source: "google", target: "ca" },
];

export const SITE_DATA: SiteData = {
  ny: ["Q2XH-QL"],
  nj: ["Q2XH-HL"],
  vt: ["Q2XH-G"],
  ma: ["Q2XH-HL", "Q2XH-P"],
  ca: [
    "Q2XH-PL",
    "Q2XH-K",
    "1018 FW",
    "1228 FW",
    "Q24X-73",
    "Q2XH-HL",
    "Q2XH-L",
  ],
};

export const CALIFORNIA_CHILDREN = [
  { id: "Q2KN-FL", label: "Q2KN-FL", x: 15, y: 60 },
  { id: "Q2KN-KL", label: "Q2KN-KL", x: 60, y: 60 },
  { id: "1018FW", label: "1018 FW", x: 105, y: 60 },
  { id: "I229FW", label: "I229 FW", x: 150, y: 60 },
  { id: "Q2KN-73", label: "Q2KN-73", x: 195, y: 60 },
  { id: "Q2KN-HL", label: "Q2KN-HL", x: 240, y: 60 },
];
