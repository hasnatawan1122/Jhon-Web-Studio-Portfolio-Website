export default function Portfolio() {
  return (
    <div className="py-20 px-[5%] max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="mb-14">
        <div className="text-xs font-bold tracking-[0.12em] uppercase text-accent mb-2">Portfolio</div>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
          Recent Work
        </h1>
        <p className="text-muted text-lg max-w-[520px] leading-relaxed">
          A selection of WordPress and WooCommerce projects. More client work coming soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for future projects */}
        <div className="border-2 border-dashed border-border rounded-xl min-h-[300px] flex flex-col items-center justify-center gap-3 text-faint">
          <span className="text-4xl">🚀</span>
          <p className="font-medium">New project coming soon</p>
        </div>
        <div className="border-2 border-dashed border-border rounded-xl min-h-[300px] flex flex-col items-center justify-center gap-3 text-faint">
          <span className="text-4xl">🛒</span>
          <p className="font-medium">Store build in progress</p>
        </div>
        <div className="border-2 border-dashed border-border rounded-xl min-h-[300px] flex flex-col items-center justify-center gap-3 text-faint">
          <span className="text-4xl">💻</span>
          <p className="font-medium">Client site under development</p>
        </div>
      </div>
    </div>
  );
}
