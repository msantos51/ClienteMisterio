export default function PromoPrice() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg font-semibold text-gray-400 line-through">64,99€</span>
      <span className="text-2xl font-bold text-teal-600">24,99€</span>
      <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-700">-62%</span>
    </div>
  );
}
