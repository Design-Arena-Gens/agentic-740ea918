import type { ChannelCadenceItem } from "@/data/contentPlan";

interface ChannelCadenceTableProps {
  items: ChannelCadenceItem[];
}

export function ChannelCadenceTable({ items }: ChannelCadenceTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
        <thead className="bg-sherogreen/10 text-slate-900">
          <tr>
            <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide">
              Channel
            </th>
            <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide">
              Cadence
            </th>
            <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide">
              Content Mix
            </th>
            <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide">
              Storytelling Angle
            </th>
            <th scope="col" className="px-5 py-4 text-xs font-semibold uppercase tracking-wide">
              Optimization Notes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {items.map((item) => (
            <tr key={item.channel} className="align-top">
              <td className="px-5 py-4 font-semibold text-slate-900">{item.channel}</td>
              <td className="px-5 py-4">{item.cadence}</td>
              <td className="px-5 py-4">{item.contentMix}</td>
              <td className="px-5 py-4">{item.storytellingAngle}</td>
              <td className="px-5 py-4">{item.optimizationNotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
