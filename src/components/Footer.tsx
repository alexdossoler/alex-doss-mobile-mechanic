export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Alex Doss Mobile Mechanic
          </div>
          <div className="text-sm text-zinc-600">
            Text: <span className="font-semibold text-zinc-900">(407) 234-5863</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
