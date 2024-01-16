
const gear = [
  { title: "HP Omen 40L Gaming Desktop", info: ["AMD Ryzen 5 5600G", "NVIDIA GeForce RTX 3060Ti", "HyperX 16 GB RAM", "Windows 11"] },
  { title: "Macbook Pro (2019)", info: ["Intel Core i7", "16 GB RAM"] },
  { title: "Keyboards", info: ["Wireless Corne (Build In Progress)", "Lily58 Pro - Lavender Purples", "FEKER Alice 80 - Lavender Purples"] },
  { title: "Audio & Video", info: ["Microphone: HyperX QuadCast Pro", "Headphones: Corsair HS65", "Webcam: Logitech C922 Pro Stream"] },
];
export default function Gear() {
    return (
      <div className="px-6 md:px-6 pt-8 max-w-[700px] mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex animate-in flex-col gap-4">
              <h1 className="text-2xl font-bold tracking-tight text-primary">My Gear</h1>
              <p className="">The equipment I use for development.</p>
            </div>
            <div className="flex animate-in flex-col gap-4">
              <h3 className="text-xl font-bold mb-1 border-b-2">Hardware</h3>
              <ul className="flex flex-col">
                {gear.map((gear) => (
                  <li className="py-2" key={gear.title}>
                    <h1 className="mb-1 text-md md:text-lg font-bold">
                      {gear.title} 
                    </h1>
                    <ul className="flex flex-col pl-2">
                      {gear.info.map((info) => (
                        <li key={info}>
                          <p className="mb-2 uppercase tracking-wide text-sm text-gray-600">
                            {info}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <div></div>
            </div>
          </div>
        </div>
    )
  }
  