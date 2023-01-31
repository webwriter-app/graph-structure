export type iGraph = {
  newLink: string;
  nodes: { name: string }[];
  links: {
    source: string;
    target: string;
    weight: number;
  }[];
};

export type AnimationType = {
  type: "SetNodeSubText" | "RESET" | "NODE" | "LINK";
  data: any;
}[];

export type AnimationStatusType = "STOP" | "RUN" | "PAUSE";
