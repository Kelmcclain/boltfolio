import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface AddOnsProps {
  addons: AddOn[];
  selectedAddons: string[];
  onAddonsChange: (addons: string[]) => void;
}

export function AddOns({ addons, selectedAddons, onAddonsChange }: AddOnsProps) {
  const toggleAddon = (id: string) => {
    const newAddons = selectedAddons.includes(id)
      ? selectedAddons.filter(addon => addon !== id)
      : [...selectedAddons, id];
    onAddonsChange(newAddons);
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Optional Add-ons</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((addon) => {
          const isSelected = selectedAddons.includes(addon.id);
          return (
            <motion.div
              key={addon.id}
              whileHover={{ scale: 1.02 }}
              className={`bg-zinc-900/50 rounded-xl p-6 cursor-pointer border-2 transition-colors ${
                isSelected ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => toggleAddon(addon.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-white">{addon.name}</h3>
                <button
                  className={`p-2 rounded-full ${
                    isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-zinc-800 text-gray-400'
                  }`}
                >
                  {isSelected ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
              <div className="text-xl font-bold text-white">
                ${addon.price.toLocaleString()}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}