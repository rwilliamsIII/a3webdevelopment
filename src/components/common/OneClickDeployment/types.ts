export type DeploymentStage = "preparing" | "building" | "testing" | "deploying" | "success" | "reset";

// Define deployment pipeline stages - reduced steps
export const pipelineStages = [
  { id: "preparing", name: "Prepare", duration: 3000 },
  { id: "building", name: "Build", duration: 3000 },
  { id: "deploying", name: "Deploy", duration: 3000 },
  { id: "success", name: "Live", duration: 4000 }
];
