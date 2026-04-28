export default function GlassCard({ className = '', children }) {
  return <div className={`glass-panel rounded-2xl ${className}`}>{children}</div>;
}