import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";

export function AirflowVisual() {
  return (
    <div className="airflow-visual" aria-label="Diagram showing engineered airflow through a building">
      <AnimatedGridPattern className="airflow-grid" />
      <div className="building-shell">
        <div className="building-core" />
        <div className="building-floor floor-one" />
        <div className="building-floor floor-two" />
        <div className="building-floor floor-three" />
        <div className="plant-unit">AHU</div>
      </div>
      <div className="flow-line flow-one" />
      <div className="flow-line flow-two" />
      <div className="flow-line flow-three" />
      <div className="visual-caption">
        <span>Airflow</span>
        <strong>Balanced comfort</strong>
      </div>
    </div>
  );
}
