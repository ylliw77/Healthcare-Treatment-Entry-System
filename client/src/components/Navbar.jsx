export default function Navbar() {
  return (
    <>
      <nav className="bg-white border">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://www.carenow.id/logoOriginal.png"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
