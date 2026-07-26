import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AirflowVisual } from "@/components/visuals/AirflowVisual";

export default function NotFound() {
  return (
    <section className="not-found section">
      <div className="site-container not-found-grid">
        <div>
          <span className="mono-label">404 · Route not found</span>
          <h1>That airflow path is disconnected.</h1>
          <p>Return to the main system or explore the services CES provides.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/">Return home <ArrowRight size={18} /></Link>
            <Link className="button button-secondary" href="/services">Explore services</Link>
          </div>
        </div>
        <AirflowVisual />
      </div>
    </section>
  );
}
