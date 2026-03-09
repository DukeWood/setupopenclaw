const platforms = [
  { name: "Gmail", color: "#EA4335" },
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#000000" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "GitHub", color: "#333333" },
  { name: "Calendar", color: "#4285F4" },
  { name: "Drive", color: "#0F9D58" },
  { name: "Zoom", color: "#2D8CFF" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Jira", color: "#0052CC" },
  { name: "Linear", color: "#5E6AD2" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Teams", color: "#6264A7" },
];

export function Integrations() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          Connects to your existing tools
        </p>
        <div className="flex justify-center items-center flex-wrap">
          {platforms.map((platform, i) => (
            <div
              key={platform.name}
              className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center text-white text-xs font-bold -ml-2 first:ml-0 hover:scale-110 transition-transform"
              style={{ backgroundColor: platform.color, zIndex: platforms.length - i }}
              title={platform.name}
            >
              {platform.name.slice(0, 2)}
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 shadow-md flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold -ml-2">
            +10K
          </div>
        </div>
      </div>
    </section>
  );
}
