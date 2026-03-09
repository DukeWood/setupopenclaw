import { MapPin } from "lucide-react";

const cities = [
  { name: "London", type: "In-Person + Remote" },
  { name: "Manchester", type: "Remote" },
  { name: "Birmingham", type: "Remote" },
  { name: "Edinburgh", type: "Remote" },
  { name: "Bristol", type: "Remote" },
  { name: "Leeds", type: "Remote" },
  { name: "Glasgow", type: "Remote" },
  { name: "Cambridge", type: "Remote" },
  { name: "Oxford", type: "Remote" },
  { name: "Cardiff", type: "Remote" },
];

export function Cities() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Available <span className="text-gradient-brand">across the UK</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Remote setup anywhere. In-person available in London.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 text-center border border-slate-200 dark:border-slate-700"
            >
              <MapPin className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
              <p className="font-semibold text-slate-900 dark:text-white text-sm">
                {city.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {city.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
